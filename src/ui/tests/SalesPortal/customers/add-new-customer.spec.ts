import test, { expect } from '@playwright/test';
import { SALES_PORTAL_URL, USER_LOGIN, USER_PASSWORD } from 'config/environment';
import { generateCustomerData } from 'data/customers/generateCustomer.data';
import { NOTIFICATIONS } from 'data/notifications.data';
import { AddNewCustomerPage } from 'ui/pages/customers/addNewCustomer.page';
import { CustomersPage } from 'ui/pages/customers/customers.page';
import { HomePage } from 'ui/pages/home.page';
import { SideMenuComponent } from 'ui/pages/sideMenu.page';
import { SignInPage } from 'ui/pages/signIn.page';

test.describe('[UI] [Sales Portal] [Customers]', () => {
  test('Should create customer with valid data', async ({ page }) => {
    const signInPage = new SignInPage(page);
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);
    const sideMenu = new SideMenuComponent(page);

    await page.goto(SALES_PORTAL_URL);
    await signInPage.fillCredentials({ email: USER_LOGIN, password: USER_PASSWORD });
    await signInPage.clickLogin();

    await homePage.waitForOpened();
    await sideMenu.clickMenuItem('Customers');
    await customersPage.waitForOpened();
    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    const data = generateCustomerData();
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForOpened();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);
    const createdCustomer = await customersPage.getCustomerData(data.email);
    await expect(createdCustomer.email).toEqual(data.email);
    await expect(createdCustomer.name).toEqual(data.name);
    await expect(createdCustomer.country).toEqual(data.country);
  });
});