import { test, expect } from "fixtures/contollers.fixture";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { invalidTestCases } from "data/customers/create_invalid.data";
import { STATUS_CODES } from "data/statusCodes";
import { validateResponse } from "utils/validations/responseValidation";

test.describe("[API] [Customers] [Create] Negative cases", () => {
  let token = "";

  test.beforeEach(async ({ signInController }) => {
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    token = loginResponse.headers["authorization"];
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);
  });

  invalidTestCases.forEach(({ name, data, expectedError }) => {
    test(name, async ({ customersController }) => {
      const customerResponse = await customersController.create(data, token);

      validateResponse(customerResponse, STATUS_CODES.BAD_REQUEST, false, expectedError);
    });
  });
});
