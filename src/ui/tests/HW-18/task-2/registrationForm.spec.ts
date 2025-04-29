/* Создайте ОДИН смоук тест со следующими шагами:

1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
2. Заполните форму регистрации
3. Проверьте, что пользователь успешно зарегистрирован 
*/

import { test, expect } from "@playwright/test";

test.describe("[UI] [Demo] Registration", () => {
  const validCredentials = {
    firstname: "Dmitry",
    lastname: "Litvinovich",
    adress: "725 S FIGUEROA LOS ANGELES CA 90017-5429 USA",
    email: "userTest@gmail.com",
    phone: "+375291231232",
    country: "USA",
    gender: "male",
    hobbies1: "Travelling",
    hobbies2: "Sports",
    language: "English",
    skills: ["JavaScript", "Java"],
    yearOfBirth: "1991",
    monthOfBirth: "October",
    dayOfBirth: "4",
    password: "password123",
  };

  const formSelectors = {
    fieldFirstname: "#firstName",
    fieldLastname: "#lastName",
    textareaAddress: "#address",
    fieldEmail: "#email",
    fieldPhone: "#phone",
    dropdownCountry: "#country",
    radioGender: `input[name='gender'][value='male']`,
    checkboxHobbies1: "input[class='hobby'][value='Travelling']",
    checkboxHobbies2: "input[class='hobby'][value='Sports']",
    fieldLanguage: "#language",
    dropdownSkills: "#skills",
    dropdownYear: "#year",
    dropdownMonth: "#month",
    dropdownDay: "#day",
    fieldPassword: "#password",
    fieldPasswordConfirm: "#password-confirm",
    buttonSubmit: "button[type='submit']",
    registrationDetailsHeader: "h2",
    fullName: "#fullName",
    address: "#address",
    email: "#email",
    phone: "#phone",
    country: "#country",
    gender: "#gender",
    language: "#language",
    skills: "#skills",
    hobbies: "#hobbies",
    dateOfBirth: "#dateOfBirth",
  };

  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-registration-form/");
  });

  test("Smoke | Should registrate with valid credentials", async ({ page }) => {
    await page.locator(formSelectors.fieldFirstname).fill(validCredentials.firstname);
    await page.locator(formSelectors.fieldLastname).fill(validCredentials.lastname);
    await page.locator(formSelectors.textareaAddress).fill(validCredentials.adress);
    await page.locator(formSelectors.fieldEmail).fill(validCredentials.email);
    await page.locator(formSelectors.fieldPhone).fill(validCredentials.phone);
    await page.locator(formSelectors.dropdownCountry).selectOption({ value: validCredentials.country });
    await page.locator(formSelectors.radioGender).check();
    await page.locator(formSelectors.checkboxHobbies1).check();
    await page.locator(formSelectors.checkboxHobbies2).check();
    await page.locator(formSelectors.fieldLanguage).fill(validCredentials.language);
    await page.locator(formSelectors.dropdownSkills).selectOption(validCredentials.skills);
    await page.locator(formSelectors.dropdownYear).selectOption({ value: validCredentials.yearOfBirth });
    await page.locator(formSelectors.dropdownMonth).selectOption({ value: validCredentials.monthOfBirth });
    await page.locator(formSelectors.dropdownDay).selectOption({ value: validCredentials.dayOfBirth });
    await page.locator(formSelectors.fieldPassword).fill(validCredentials.password);
    await page.locator(formSelectors.fieldPasswordConfirm).fill(validCredentials.password);

    await page.locator(formSelectors.buttonSubmit).click();

    await page.waitForSelector(formSelectors.registrationDetailsHeader);

    await expect(page.locator(formSelectors.registrationDetailsHeader)).toHaveText("Registration Details");
    await expect(page.locator(formSelectors.fullName)).toHaveText(`${validCredentials.firstname} ${validCredentials.lastname}`);
    await expect(page.locator(formSelectors.address)).toHaveText(validCredentials.adress);
    await expect(page.locator(formSelectors.email)).toHaveText(validCredentials.email);
    await expect(page.locator(formSelectors.phone)).toHaveText(validCredentials.phone);
    await expect(page.locator(formSelectors.country)).toHaveText(validCredentials.country);
    await expect(page.locator(formSelectors.gender)).toHaveText(validCredentials.gender);
    await expect(page.locator(formSelectors.language)).toHaveText(validCredentials.language);
    await expect(page.locator(formSelectors.skills)).toHaveText(validCredentials.skills.join(", "));
    await expect(page.locator(formSelectors.hobbies)).toHaveText(`${validCredentials.hobbies1}, ${validCredentials.hobbies2}`);
    await expect(page.locator(formSelectors.dateOfBirth)).toHaveText(`${validCredentials.dayOfBirth} ${validCredentials.monthOfBirth} ${validCredentials.yearOfBirth}`);

    const passwordMask = await page.locator(formSelectors.fieldPassword).innerText();
    await expect(passwordMask).toBe("*".repeat(validCredentials.password.length));
  });
});
