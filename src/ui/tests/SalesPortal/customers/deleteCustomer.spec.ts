import { expect, test } from "fixtures/businessSteps.fixture";


test.describe('[UI] [Sales Portal] [Customers]', () => {
  test('Should delete customer', async ({ loginAsLocalUser, createNewCustomer, customersPage }) => {
    await loginAsLocalUser();
    const createdCustomer = await createNewCustomer();
    await customersPage.clickTableAction(createdCustomer.email, 'delete');
    await customersPage.deleteModal.waitForOpened();
    await customersPage.deleteModal.clickYesDelete();
    await customersPage.deleteModal.waitForClosed();
    await customersPage.waitForOpened();
    expect(await customersPage.isCustomerInTable(createdCustomer.email), "Customer is present in table").toBeFalsy();
  });
});