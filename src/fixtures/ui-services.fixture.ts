import { CustomersUIService } from "ui/services/customers/customers.ui-service";
import { HomeUIService } from "ui/services/home.ui-service";
import { SignInUIService } from "ui/services/signIn.ui-serivice";
import { test as base } from "fixtures/pages.fixture";
import { EditCustomerUiService } from "ui/services/customers/edit-customer.ui-service";
import { AddNewCustomerUiService } from "ui/services/customers/add-new-customer.ui-service";
import { ProductsUIService } from "ui/services/products/products.ui-service";
import { AddNewProductUIService } from "ui/services/products/addNewProduct.ui-service";

interface IUIServices {
  homeUIService: HomeUIService;
  signInUIService: SignInUIService;
  customersUIService: CustomersUIService;
  addNewCustomerUIService: AddNewCustomerUiService;
  editCustomerUIService: EditCustomerUiService;
  productsUIService: ProductsUIService;
  addNewProductUIService: AddNewProductUIService;
}

export const test = base.extend<IUIServices>({
  homeUIService: async ({ page }, use) => {
    await use(new HomeUIService(page));
  },
  signInUIService: async ({ page }, use) => {
    await use(new SignInUIService(page));
  },
  customersUIService: async ({ page }, use) => {
    await use(new CustomersUIService(page));
  },
  addNewCustomerUIService: async ({ page }, use) => {
    await use(new AddNewCustomerUiService(page));
  },
  editCustomerUIService: async ({ page }, use) => {
    await use(new EditCustomerUiService(page));
  },
  productsUIService: async ({ page }, use) => {
    await use(new ProductsUIService(page));
  },
  addNewProductUIService: async ({ page }, use) => {
    await use(new AddNewProductUIService(page));
  },
});

export { expect } from "@playwright/test";