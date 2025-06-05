import { test, expect } from "fixtures/contollers.fixture";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { validTestCases } from "data/customers/create_valid.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/statusCodes";
import { validateResponse } from "utils/validations/responseValidation";
import { validateSchema } from "utils/validations/schemaValidation";

test.describe("[API] [Customers] [Create] Positive cases", () => {
  let token = "";

  test.beforeEach(async ({ signInController }) => {
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    token = loginResponse.headers["authorization"];
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);
  });

  validTestCases.forEach(({ name, data }) => {
    test(name, async ({ customersController }) => {
      const customerResponse = await customersController.create(data, token);

      validateSchema(customerSchema, customerResponse.body);
      validateResponse(customerResponse, STATUS_CODES.CREATED, true, null);
      expect.soft(customerResponse.body.Customer).toMatchObject({ ...data });

      const id = customerResponse.body.Customer._id;
      const deleteResponse = await customersController.delete(id, token);
      expect.soft(deleteResponse.status).toBe(STATUS_CODES.DELETED);
    });
  });
});
