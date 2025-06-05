import { test, expect } from "fixtures/contollers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { loginSchema } from "data/schemas/auth/loginSchema.schema";
import { STATUS_CODES } from "data/statusCodes";
import { validateResponse } from "utils/validations/responseValidation";
import { validateSchema } from "utils/validations/schemaValidation";
import { ICredentials } from "types/signIn.types";

test.describe("[API] [Customers] [Login]", () => {
  test.skip("Login customer", async ({ request }) => {
    const loginResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {"content-type": "application/json"},
      }
    );
    const headers = loginResponse.headers();
    const token = headers["authorization"];
    const loginBody = await loginResponse.json();

    //Assert: status-code
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK)
    //Assert: token
    expect.soft(token).toBeTruthy();
    //Assert: json-schema
    validateSchema(loginSchema, loginBody); 
  });

  test("Login customer with controller", async ({ signInController }) => {
    const credential: ICredentials = {
      username: USER_LOGIN,
      password: USER_PASSWORD,
    };
    const loginResponse = await signInController.login(credential)

    const headers = loginResponse.headers;
    const token = headers["authorization"];
    const responseBody = loginResponse.body;

    validateResponse(loginResponse, STATUS_CODES.OK, true, null);
    expect.soft(token).toBeTruthy();
    validateSchema(loginSchema, responseBody);
  });
})