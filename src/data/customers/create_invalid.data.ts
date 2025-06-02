import { generateCustomerData } from "data/customers/generateCustomer.data";

export const invalidTestCases = [
  {
    name: "Empty name",
    data: generateCustomerData({ name: "" }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "Name with numbers",
    data: generateCustomerData({ name: "John123 Doe" }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "Name with special characters",
    data: generateCustomerData({ name: "@John_Doe!" }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "Name too long",
    data: generateCustomerData({ name: "A".repeat(41) }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "City with digits",
    data: generateCustomerData({ city: "NewYork1" }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "City with special characters",
    data: generateCustomerData({ city: "Berlin!" }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "City too long",
    data: generateCustomerData({ city: "A".repeat(21) }),
    expectedError: "Incorrect request body",
    isSuccess: false
  },
  {
    name: "Empty street",
    data: generateCustomerData({ street: "" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Street with special characters",
    data: generateCustomerData({ street: "#Main$Street" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Street too long",
    data: generateCustomerData({ street: "A".repeat(41) }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "House = 0",
    data: generateCustomerData({ house: 0 }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "House = 1000",
    data: generateCustomerData({ house: 1000 }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Flat = 0",
    data: generateCustomerData({ flat: 0 }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Flat = 10000",
    data: generateCustomerData({ flat: 10000 }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Phone without plus",
    data: generateCustomerData({ phone: "1234567890" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Phone too short",
    data: generateCustomerData({ phone: "+1234567" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Phone longer than 20 digits",
    data: generateCustomerData({ phone: "+123456789012345678901" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Notes with forbidden characters < >",
    data: generateCustomerData({ notes: "<Invalid>" }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  },
  {
    name: "Notes longer than 250 chars",
    data: generateCustomerData({ notes: "A".repeat(251) }),
    expectedError: "Incorrect request body",
    isSuccess: false,
  }
];
