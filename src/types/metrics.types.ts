import { IResponseFields } from './api.types';

export interface IMetricsResponse extends IResponseFields {
  Metrics: {
    orders: {
      totalRevenue: number;
      totalOrders: number;
      averageOrderValue: number;
      totalCanceledOrders: number;
      recentOrders: object[];
      ordersCountPerDay: object[];
    };
    customers: {
      totalNewCustomers: number;
      topCustomers: object[];
      customerGrowth: object[];
    };
    products: {
      topProducts: object[];
    };
  };
}

export interface IMetricsCountItem {
  date: IDate;
  count: number;
}

export interface IDate {
  year: number;
  month: number;
  day: number;
}