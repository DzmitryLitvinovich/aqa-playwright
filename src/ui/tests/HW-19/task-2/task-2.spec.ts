/* Разработать тест со следующими шагами:
 - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
 - Войти в приложения используя учетные данные test@gmail.com / 12345678 при этом:
 - дождаться исчезновения спиннеров
 - проверить действительно ли пользователь с логином Anatoly вошел в систему
 - Проверить скриншотом боковое навигационное меню с выбранной страницей Home 
 */

import { test, expect } from "@playwright/test";

test.describe("[UI] [Sales Portal] Login", () => {
   const credentials = {
     email: "test@gmail.com",
     password: "12345678",
   };
 
   test.beforeEach(async ({ page }) => {
     await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
   });
 
   test("User can login and sidebar is displayed correctly", async ({ page }) => {
     await page.locator("#emailinput").fill(credentials.email);
     await page.locator("#passwordinput").fill(credentials.password);
     await page.getByRole("button", { name: "Login" }).click();
     await expect(page.locator(".spinner-border")).toHaveCount(0, { timeout: 10000 });
     const userName = page.locator("a.dropdown-toggle >> strong");
     await expect(userName).toBeVisible();
     await expect(userName).toHaveText("Anatoly");
     const sidebar = page.locator("#sidebar");
     await expect(sidebar).toHaveScreenshot("sidebar-after-login.png");
   });
});
 
