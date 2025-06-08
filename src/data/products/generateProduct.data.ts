import { faker } from '@faker-js/faker';
import { MANUFACTURER } from './manufacturer.data';
import { getRandromEnumValue } from 'utils/enum.utils';
import { IProduct } from 'types/products.type';

export function generateProductData(params?: Partial<IProduct>): IProduct {
  return {
    name: `Product ${Date.now()}`,
    manufacturer: getRandromEnumValue(MANUFACTURER),
    price: faker.number.int({ min: 1, max: 99999 }),
    amount: faker.number.int({ min: 0, max: 999 }),
    notes: `Notes ${faker.string.alpha(244)}`,
    ...params,
  };
}