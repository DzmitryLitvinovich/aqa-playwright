import { generateCustomerData } from "data/customers/generateCustomer.data";
import { COUNTRIES } from "./countries.data";

export const validTestCases = [
  {
    name: "All fields valid and filled",
    data: generateCustomerData(),
    isSuccess: true,
  }, 
  { 
    name: "Minimal valid data",
    data: generateCustomerData({
      name: "John Doe"
    }),
    isSuccess: true,
  },
  {
    name: "Max length name (40 characters)",
    data: generateCustomerData({
      name: "A".repeat(19) + " " + "B".repeat(20)
    }),
    isSuccess: true,
  },
  {
    name: "City with space in the max",
    data: generateCustomerData({
      city: "AB".repeat(10)
    }),
    isSuccess: true,
  },
  {
    name: "Street with alphanumerics and space",
    data: generateCustomerData({
      street: "AB".repeat(20)
    }),
    isSuccess: true,
  },
  {
    name: "House = 1 (min)",
    data: generateCustomerData({
      house: 1
    }),
    isSuccess: true,
  },
  {
    name: "House = 999 (max)",
    data: generateCustomerData({
      house: 999
    }),
    isSuccess: true,
  },
  {
    name: "Flat = 1 (min)",
    data: generateCustomerData({
      flat: 1
    }),
    isSuccess: true,
  },
  {
    name: "Flat = 9999 (max)",
    data: generateCustomerData({
      flat: 9999
    }),
    isSuccess: true,
  },
  {
    name: "Phone with 10 digits",
    data: generateCustomerData({
      phone: "+1234567890"
    }),
    isSuccess: true,
  },
  {
    name: "Phone with 20 digits",
    data: generateCustomerData({
      phone: "+12345678901234567890"
    }),
    isSuccess: true,
  },
  {
    name: "Notes exactly 250 characters",
    data: generateCustomerData({
      notes: "A".repeat(250)
    }),
    isSuccess: true,
  }
];
