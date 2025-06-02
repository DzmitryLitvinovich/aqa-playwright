import { test, expect } from "fixtures/contollers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/statusCodes";
import { ICredentials } from "types/signIn.types";
import { validateSchema } from "utils/validations/schemaValidation";
import { validateResponse } from "utils/validations/responseValidation";

test.describe("[API] [Customers] [Update]", () => {
  test.skip("Update customer with smoke data", async ({ request }) => {
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

    const updateCustomerData = generateCustomerData();
    const updateCustomerResponse = await request.put(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        data: updateCustomerData,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = await updateCustomerResponse.json();
    validateSchema(customerSchema, body);
    expect.soft(updateCustomerResponse.status()).toBe(STATUS_CODES.OK);
    expect.soft(body.Customer).toMatchObject({ ...updateCustomerData });
    expect.soft(body.ErrorMessage).toBe(null);
    expect.soft(body.IsSuccess).toBe(true);

    const response = await request.delete(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
  });

 test("Update customer with smoke data with controllers", async ({ signInController, customersController }) => {
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

  const customerId = customerResponse.body.Customer._id;

  const updateCustomerData = generateCustomerData();
  const updateCustomerResponse = await customersController.update(customerId, updateCustomerData, token);
  expect.soft(updateCustomerResponse.status).toBe(STATUS_CODES.OK);

  validateSchema(customerSchema, updateCustomerResponse.body);
  validateResponse(updateCustomerResponse, STATUS_CODES.OK, true, null);

  const deleteResponse = await customersController.delete(customerId, token);
  expect.soft(deleteResponse.status).toBe(STATUS_CODES.DELETED);
  });
});