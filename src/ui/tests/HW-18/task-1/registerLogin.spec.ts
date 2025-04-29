/*
  Разработайте смоук тест-сьют с тестами на REGISTER 
  на странице https://anatoly-karpovich.github.io/demo-login-form/

  Требования:
    1. Username: обязательное, от 3 до 40 символов включительно, 
       запрещены префиксные/постфиксные пробелы, как и имя, состоящее из одних пробелов.
    2. Password: обязательное, от 8 до 20 символов включительно, 
       необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещён.
*/

import { test, expect, Page } from "@playwright/test";

test.describe("[UI] [Demo] Login Form", () => {
  
  const validCredentials = {
    username: "validuser1",
    password: "ValidPassword123",
  };

  const invalidCredentials = {
    username: "us",
    password: "123As67",
  };

  const MESSAGES = {
    SUCCESS: "Successfully registered! Please, click Back to return on login page",
    PROVIDE_VALID_DATA: "Please, provide valid data",
    USERNAME_REQUIRED: "Username is required",
    PASSWORD_REQUIRED: "Password is required",
    USERNAME_IN_USE: "Username is in use",
    PREFIX_POSTFIX_SPACES: "Prefix and postfix spaces are not allowed",
    PASSWORD_LOWERCASE_REQUIRED: "Password should contain at least one character in lower case",
    USERNAME_MIN_LENGTH: "Username should contain at least 3 characters",
    PASSWORD_MIN_LENGTH: "Password should contain at least 8 characters",
  };

  async function submitUser(page: Page, username: string, password: string) {
    await page.locator("#userNameOnRegister").fill(username);
    await page.locator("#passwordOnRegister").fill(password);
    await page.locator("#register").click();
  }

  async function expectNotificationText(page: Page, expectedText: string) {
    const notification = page.locator("#errorMessageOnRegister");
    await expect(notification).toContainText(expectedText);
  }

  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
    await page.locator("#registerOnLogin").click();
  });

  test("Should register with valid credentials", async ({ page }) => {
    await submitUser(page, validCredentials.username, validCredentials.password);
    await expectNotificationText(page, MESSAGES.SUCCESS);
  });

  test("Should NOT register with invalid credentials", async ({ page }) => {
    await submitUser(page, invalidCredentials.username, invalidCredentials.password);
    await expectNotificationText(page, MESSAGES.PROVIDE_VALID_DATA);
  });

  test("Should NOT register with password too short", async ({ page }) => {
    await submitUser(page, validCredentials.username, invalidCredentials.password);
    await expectNotificationText(page, MESSAGES.PASSWORD_MIN_LENGTH);
  });

  test("Should NOT register with username too short", async ({ page }) => {
    await submitUser(page, invalidCredentials.username, validCredentials.password);
    await expectNotificationText(page, MESSAGES.USERNAME_MIN_LENGTH);
  });

  test("Should NOT register with empty username", async ({ page }) => {
    await submitUser(page, "", validCredentials.password);
    await expectNotificationText(page, MESSAGES.USERNAME_REQUIRED);
  });

  test("Should NOT register with empty password", async ({ page }) => {
    await submitUser(page, validCredentials.username, "");
    await expectNotificationText(page, MESSAGES.PASSWORD_REQUIRED);
  });

  test("Should NOT register with already used username", async ({ page }) => {
    await submitUser(page, validCredentials.username, validCredentials.password);
    await submitUser(page, validCredentials.username, validCredentials.password);
    await expectNotificationText(page, MESSAGES.USERNAME_IN_USE);
  });

  test("Should NOT register with username having prefix space", async ({ page }) => {
    await submitUser(page, ` ${validCredentials.username}`, validCredentials.password);
    await expectNotificationText(page, MESSAGES.PREFIX_POSTFIX_SPACES);
  });

  test("Should NOT register with password missing lowercase letters", async ({ page }) => {
    await submitUser(page, validCredentials.username, "UPPERCASEONLY");
    await expectNotificationText(page, MESSAGES.PASSWORD_LOWERCASE_REQUIRED);
  });
});
