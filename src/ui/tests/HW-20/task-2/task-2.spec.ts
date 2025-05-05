/* Разработать тест со следующими шагами:
https://anatoly-karpovich.github.io/demo-shopping-cart/
  - добавить продукты 2,4,6,8,10
  - завалидировать бейдж с количеством
  - открыть чекаут
  - завалидировать сумму и продукты
  - ввести все найденные вами промокоды (вспоминаем первую лекцию)
  - завалидировать конечную сумму
  - зачекаутиться
  - завалидировать сумму 
*/

import { test, expect, Page } from "@playwright/test";

enum Promocodes {
  DISCOUNT20 = "HelloThere",
  DISCOUNT15 = "15-PERCENT-FOR-CSS",
  DISCOUNT10 = "HOT-COURSE",
  DISCOUNT10_BASIC = "10-PERCENT-FOR-REDEEM",
  DISCOUNT8 = "NO-PYTHON",
  DISCOUNT7 = "JAVA-FOR-BOOMERS",
  DISCOUNT5 = "5-PERCENT-FOR-UTILS",
}

test.describe("[UI] [Shopping Cart] [Catalog]", () => {
  test("Successfully checkout with 5 products", async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-shopping-cart/");

    const products = ["Product 2", "Product 4", "Product 6", "Product 8", "Product 10"];
    for (const product of products) {
      await addProductToCart(product, page);
    }

    // Получить цены продуктов и посчитать общую сумму
    const prices = await Promise.all(products.map((p) => getProductPrice(p, page)));
    const total = prices.reduce((sum, price) => sum + price, 0);

    // Проверки на наличие товаров и корректность цены
    await expect(page.locator("#badge-number")).toHaveText(products.length.toString());
    await page.getByRole("button", { name: "Shopping Cart" }).click();
    await expect(page.locator("#total-price")).toHaveText(`$${total}.00`);
    await expect(page.locator("h5")).toContainText(products);

    // Проверка количества каждого товара в корзине
    const amounts = page.locator('[data-id="product-amount-in-shopping-cart"]');
    await expect(amounts).toHaveCount(products.length);
    for (let i = 0; i < products.length; i++) {
      await expect(amounts.nth(i)).toHaveText("1");
    }

    // Применение всех промокодов
    const promoCodes = Object.values(Promocodes);
    for (const promo of promoCodes) {
      await applyPromoCode(promo, page);
    }

    // Вычисление итоговой скидки и суммы после скидки
    const totalDiscountPercent = await calculateTotalDiscount(page);
    const finalPriceAfterDiscount = total * (1 - totalDiscountPercent / 100);
    const discountAmount = total - finalPriceAfterDiscount;
    await expect(page.locator("#total-price")).toHaveText(
      `$${finalPriceAfterDiscount.toFixed(2)} (-$${discountAmount})`
    );

    // Завершение покупки и проверка итоговой суммы
    await page.locator("#continue-to-checkout-button").click();
    await expect(page.locator("span.text-muted")).toHaveText(
      `$${finalPriceAfterDiscount.toFixed(2)}`
    );
  });

  // Функция для добавления товара в корзину
  async function addProductToCart(productName: string, page: Page) {
    await page.locator("div.card-body").filter({ hasText: productName }).getByRole("button", { name: "Add to card" }).click();
  }

  // Функция для получения цены продукта
  async function getProductPrice(productName: string, page: Page): Promise<number> {
    const priceText = await page.locator("div.card-body").filter({ hasText: productName }).locator("span").innerText();
    return Number(priceText.replace("$", ""));
  }

  // Функция для применения промокода
  async function applyPromoCode(code: string, page: Page) {
    await page.fill("#rebate-input", code);
    await page.getByRole("button", { name: "Redeem" }).click();
    await page.waitForTimeout(500); 
  }

  // Функция для вычисления общей скидки
  async function calculateTotalDiscount(page: Page): Promise<number> {
    const rebateItemsLocator = page.locator("#rebates-list small");
    const rebateTextContents = await rebateItemsLocator.allTextContents();
    const totalDiscount = rebateTextContents.reduce((sum, text) => {
      const discountTextWithoutSymbols = text.replace(/[-%]/g, "");
      const discountPercentage = parseFloat(discountTextWithoutSymbols) || 0;
      return sum + discountPercentage;
    }, 0);
    return totalDiscount;
  }
});
