import { expect, Page } from '@playwright/test';
import { apiConfig } from 'config/api-config';
import { generateProductData } from 'data/products/generateProduct.data';
import { STATUS_CODES } from 'data/statusCodes';
import _ from 'lodash';
import { IProduct, IProductResponse } from 'types/products.type';
import { AddNewProductPage } from 'ui/pages/products/addNewProduct.page';
import { ProductsPage } from 'ui/pages/products/products.page';

export class AddNewProductUIService {
  private addNewProductPage: AddNewProductPage;
  private productsPage: ProductsPage;
  constructor(private page: Page) {
    this.addNewProductPage = new AddNewProductPage(page);
    this.productsPage = new ProductsPage(page);
  }

  async create(customData?: IProduct) {
    const data = generateProductData(customData);
    await this.addNewProductPage.fillInputs(data);
    const response = await this.addNewProductPage.interceptResponse<IProductResponse, unknown[]>(
      apiConfig.ENDPOINTS.PRODUCTS,
      this.addNewProductPage.clickSaveNewProduct.bind(this.addNewProductPage),
    );
    expect(response.status).toBe(STATUS_CODES.CREATED);
    expect(_.omit(response.body.Product, '_id', 'createdOn')).toEqual(data);
    await this.productsPage.waitForOpened();
    return response.body.Product;
  }
}