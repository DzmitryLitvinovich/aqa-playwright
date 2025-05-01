/* Разработать тест со следующими шагами:

  - открыть https://the-internet.herokuapp.com/
  - перейти на страницу Dynamic Controls
  - Дождаться появления кнопки Remove
  - Завалидировать текста в заголовке страницы
  - Чекнуть чекбокс
  - Кликнуть по кнопке Remove
  - Дождаться исчезновения чекбокса
  - Проверить наличие кнопки Add
  - Завалидировать текст It's gone!
  - Кликнуть на кнопку Add
  - Дождаться появления чекбокса
  - Завалидировать текст It's back! 
  */

import { test, expect } from "@playwright/test";

test.describe("[UI] [Heroku] Dynamic Controls", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com");
      await page.getByRole("link", { name: "Dynamic Controls" }).click();
    });
  
    test("Checkbox can be removed and added again", async ({ page }) => {
      const checkbox = page.locator('#checkbox-example input[type="checkbox"]');
      const message = page.locator("p#message");
      const removeButton = page.getByRole("button", { name: "Remove" });
  
      // Проверка начального состояния
      await expect(removeButton).toBeVisible();
      await expect(page.locator("h4").first()).toHaveText("Dynamic Controls");
      await expect(checkbox).toBeVisible();
  
      // Удаление чекбокса
      await checkbox.check();
      await expect(checkbox).toBeChecked();
      await removeButton.click();
  
      // Ожидание сообщения и исчезновения чекбокса
      await expect(message).toHaveText("It's gone!");
      await expect(checkbox).toBeHidden();
  
      // Добавление чекбокса
      const addButton = page.getByRole("button", { name: "Add" });
      await expect(addButton).toBeVisible();
      await addButton.click();
  
      // Ожидание появления чекбокса и сообщения
      await expect(message).toHaveText("It's back!");
      await expect(checkbox).toBeVisible();
    });
});
  