import { apiConfig } from "config/api-config";
import { COUNTRIES } from "data/customers/countries.data";
import { expect, test } from "fixtures/businessSteps.fixture";
import { convertToDateAndTime } from "utils/date.utils";

test.describe("[UI] [Customers] [Details]", async () => {
  test("Should display valid customer data", async ({
    loginAsLocalUser,
    homePage,
    customersPage,
    customerDetailsPage,
    mock,
    page,
  }) => {
    const expected = {
        email: "test_1@gmail.com",
        name: "Dzmitry Litvinovich",
        country: "USA" as COUNTRIES,
        city: "Minsk",
        street: "Rich",
        house: 321,
        flat: 7,
        phone: "+1111111111111111111",
        createdOn: "2025-06-05T16:21:10.000Z",
        notes: "secret",
    };
    const id = "6841c3f61c508c5d5e511a45";

    // await mock.customers({
    //   Customers: [
    //     {
    //       _id: id,
    //       ...expected,
    //     },
    //   ],
    //   ErrorMessage: null,
    //   IsSuccess: true,
    //   sorting: {
    //     sortField: "createdOn",
    //     sortOrder: "desc",
    //   },
    // });

    await mock.customerDetails({ Customer: { _id: id, ...expected }, ErrorMessage: null, IsSuccess: true });

    await loginAsLocalUser();
    // await homePage.clickModuleButton("Customers");
    // await customersPage.waitForOpened();

    // await customersPage.clickTableAction("aaa@gmail.com", "details");
    // await page.evaluate(async (id: string) => {
    //   await (
    //     window as typeof window & { renderCustomerDetailsPage: (id: string) => Promise<void> }
    //   ).renderCustomerDetailsPage(id);
    // }, id);
    await customerDetailsPage.open(id);
    await customerDetailsPage.waitForOpened();

    const actual = await customerDetailsPage.getDetails();
    expect(actual).toEqual({ ...expected, createdOn: convertToDateAndTime(expected.createdOn) });
  });
});