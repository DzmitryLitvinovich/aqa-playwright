  /*Создать тест сьют используя DDT подход с негативными тест-кейсами по регистрации на сайте
https://anatoly-karpovich.github.io/demo-login-form/
Требования:
Страница регистрации:
  Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
  Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
Страница логина:
  Username: обязательное
  Password: обязательное 
*/

/*Создать тест сьют используя DDT подход с негативными тест-кейсами по регистрации на сайте
https://anatoly-karpovich.github.io/demo-login-form/
Требования:
Страница регистрации:
  Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
  Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
Страница логина:
  Username: обязательное
  Password: обязательное */

import { test, expect, Page } from "@playwright/test";

const negativeRegistrationData = [
    {
        username: '',
        password: 'Ab123457',
        message: 'Username is required',
    },
    {
        username: '   ',
        password: 'Ab123458',
        message: 'Prefix and postfix spaces are not allowed is username',
    },
    {
        username: 'Ab',
        password: 'Ab123459',
        message: 'Username should contain at least 3 characters',
    },
    {
        username: 'AbcdName1',
        password: '',
        message: 'Password is required',
    },
    {
        username: 'AbcdName2',
        password: '    ',
        message: 'Password is required',
    },
    {
        username: 'AbcdName3',
        password: '1234567',
        message: 'Password should contain at least 8 characters',
    },
    {
        username: 'AbcdName4',
        password: 'A1234567',
        message: 'Password should contain at least one character in lower case',
    },
];

//Функция для ввода данных регистрации
async function fillRegistrationForm(page: Page, username: string, password: string) {
    await page.locator('#userNameOnRegister').fill(username);
    await page.locator('#passwordOnRegister').fill(password);
}

//Функция для клика по кнопке регистрации
async function clickRegisterButton(page: Page) {
    await page.getByRole('button', { name: 'register' }).click();
}

//Функция для проверки сообщения об ошибке
async function checkErrorMessage(page: Page, expectedMessage: string) {
    await expect(page.locator('#errorMessageOnRegister')).toHaveText(expectedMessage);
}
  
test.describe("[UI] [Negative Tests] Registration", () => {
    for (const data of negativeRegistrationData) {
        test(`Registration failure with username: "${data.username}" and password: "${data.password}", expected message: "${data.message}"`, async ({ page }) => {
            await page.goto('https://anatoly-karpovich.github.io/demo-login-form/');
            await page.locator('#registerOnLogin').click();
            await fillRegistrationForm(page, data.username, data.password);
            await clickRegisterButton(page);
            await checkErrorMessage(page, data.message);
        });
    }
});
  
  