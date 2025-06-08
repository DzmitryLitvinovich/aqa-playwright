import { Locator, Page } from "@playwright/test";
import { SalesPortalPage } from "./salesPortal.page";
import { IMainMetricsValues, ModuleName } from "types/home.types";
import { MAIN_METRICS } from "data/home/mainMetrics.data";

export class HomePage extends SalesPortalPage {
  readonly title = this.page.locator(".welcome-text");
  readonly customersButton = this.page.getByRole("link", { name: "Customer" });
  readonly productsButton = this.page.getByRole("link", { name: "Products" });
  readonly ordersButton = this.page.getByRole("link", { name: "Orders" });

  readonly uniqueElement = this.title;

  readonly ordersThisYear = this.page.locator('#total-orders-container .card-text');
  readonly newCustomers = this.page.locator('#total-customers-container .card-text');
  readonly canceledOrders = this.page.locator('#canceled-orders-container .card-text');
  readonly totalRevenue = this.page.locator('#total-revenue-container .card-text');
  readonly avgOrderValue = this.page.locator('#avg-orders-value-container .card-text');

  async clickModuleButton(moduleName: ModuleName) {
    const moduleButtons: Record<ModuleName, Locator> = {
      Customers: this.customersButton,
      Products: this.productsButton,
      Orders: this.ordersButton,
    };

    await moduleButtons[moduleName].click();
  }

  async getMainMetricsValues(): Promise<IMainMetricsValues> {
    const [ordersThisYear, newCustomers, canceledOrders, totalRevenue, avgOrderValue] = await Promise.all([
      this.ordersThisYear.innerText(),
      this.newCustomers.innerText(),
      this.canceledOrders.innerText(),
      this.totalRevenue.innerText(),
      this.avgOrderValue.innerText(),
    ]);
    return {
      ordersThisYear: +ordersThisYear,
      newCustomers: +newCustomers,
      canceledOrders: +canceledOrders,
      totalRevenue,
      avgOrderValue,
    };
  }

  async getMetricsValueByName(name: MAIN_METRICS) {
    const metrics = await this.getMainMetricsValues();
    switch (name) {
      case MAIN_METRICS.OrdersThisYear:
        return metrics.ordersThisYear;
      case MAIN_METRICS.NewCustomers:
        return metrics.newCustomers;
      case MAIN_METRICS.CanceledOrders:
        return metrics.canceledOrders;
      case MAIN_METRICS.TotalRevenue:
        return metrics.totalRevenue;
      case MAIN_METRICS.AvgOrderValue:
        return metrics.avgOrderValue;
      default:
        throw new Error(`Unknown metric name: ${name}`);
    }
  }
}