import { test, expect } from "fixtures/contollers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/statusCodes";
import { ICredentials } from "types/signIn.types";

test.describe("[API] [Customers] [Delete]", () => {
  test.skip("Should delete customer", async ({ request }) => {
    const loginResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN, {
      data: { username: USER_LOGIN, password: USER_PASSWORD },
      headers: {
        "content-type": "application/json",
      },
    });
    const headers = loginResponse.headers();
    const token = headers["authorization"];
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);

    const customerData = generateCustomerData();
    const customerResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS, {
      data: customerData,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const customerBody = await customerResponse.json();
    expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);

    const response = await request.delete(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const deleteBody = await response.text();
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
    expect.soft(deleteBody).toBe("");
  });

  test("Should delete customer with controllers", async ({ signInController, customersController }) => {
  const credential: ICredentials = {
    username: USER_LOGIN,
    password: USER_PASSWORD,
  };

  const loginResponse = await signInController.login(credential);
  const token = loginResponse.headers["authorization"];
  expect.soft(loginResponse.status).toBe(STATUS_CODES.OK);

  const customerData = generateCustomerData();

  const customerResponse = await customersController.create(customerData, token);
  expect.soft(customerResponse.status).toBe(STATUS_CODES.CREATED);

  const deleteResponse = await customersController.delete(customerResponse.body.Customer._id, token);

  expect.soft(deleteResponse.status).toBe(STATUS_CODES.DELETED);
  expect(deleteResponse.body).toBe("");
  });
});