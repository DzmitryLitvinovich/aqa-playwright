import { ICustomer,  TCustomerInTable } from "types/customer.types";
import { SalesPortalPage } from "../salesPortal.page";

export class CustomersPage extends SalesPortalPage {
  readonly addNewCustomerButton = this.page.getByRole('button', { name: 'Add Customer' });
  readonly tableHeader = this.page.locator('#table-customers th div');
  readonly emailHeader = this.tableHeader.filter({ hasText: 'Email' });
  readonly nameHeader = this.tableHeader.filter({ hasText: 'Name' });
  readonly countryHeader = this.tableHeader.filter({ hasText: 'Country' });
  readonly tableRow = this.page.locator('#table-customers tbody tr');
  readonly uniqueElement = this.addNewCustomerButton;

  tableRowByEmail = (email: string) =>
    this.tableRow.filter({ has: this.page.getByText(email) });

  emailCell = (email: string) => this.tableRowByEmail(email).locator('td').nth(1);
  nameCell = (email: string) => this.tableRowByEmail(email).locator('td').nth(2);
  countryCell = (email: string) => this.tableRowByEmail(email).locator('td').nth(3);

  async clickAddNewCustomer() {
    await this.addNewCustomerButton.click();
  }

  async getInfoCreatedCustomer(customerEmail: string): Promise<TCustomerInTable> {
    const cells = await this.tableRowByEmail(customerEmail).locator('td').allInnerTexts();
    const [email, name, country] = cells;

    return {
      email,
      name,
      country: country as ICustomer['country'],
    };
  }
}