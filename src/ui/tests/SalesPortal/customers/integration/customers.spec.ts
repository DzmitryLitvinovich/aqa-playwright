import { apiConfig } from "config/api-config";
import { COUNTRIES } from "data/customers/countries.data";
import { expect, test } from "fixtures/businessSteps.fixture";
import { customersSortField, sortDirection } from "types/api.types";

test.describe("[UI] [Customers] [Table component]", async () => {
  const customer = {
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
    _id: "6841cd621c508c5d5e511efd",
  };

  const fields: customersSortField[] = ["createdOn", "email", "name", "country"];
  const directions: sortDirection[] = ["desc", "asc"];

  fields.forEach((field) => {
    directions.forEach((direction) => {
      test(`Should display correct sorting for ${field} field and ${direction} direction`, async ({
        loginAsLocalUser,
        customersPage,
        mock,
      }) => {
        await mock.customers({
          Customers: [
            {
              ...customer,
            },
          ],
          ErrorMessage: null,
          IsSuccess: true,
          sorting: {
            sortField: field,
            sortOrder: direction,
          },
        });

        await loginAsLocalUser();

        await customersPage.open();
        await customersPage.waitForOpened();
        await expect(customersPage.table).toHaveScreenshot();
      });
    });
  });

  test("Should send correct query clicking on Created On header", async ({ loginAsLocalUser, customersPage, page }) => {
    await loginAsLocalUser();
    await customersPage.open();
    await customersPage.waitForOpened();
    // const [request] = await Promise.all([
    //   page.waitForRequest((request) => request.url().includes(apiConfig.ENDPOINTS.CUSTOMERS)),
    //   customersPage.clickTableHeader("createdOn"),
    // ]);
    const request = await customersPage.interceptRequest(
      apiConfig.ENDPOINTS.CUSTOMERS,
      customersPage.clickTableHeader.bind(customersPage),
      "createdOn"
    );
    expect(request.url()).toBe(
      `${apiConfig.BASE_URL}/${apiConfig.ENDPOINTS.CUSTOMERS}?sortField=createdOn&sortOrder=asc&page=1&limit=10`
    );
  });
});