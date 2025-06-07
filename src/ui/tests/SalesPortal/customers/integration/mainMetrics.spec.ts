import { DEFAULT_METRICS_RESPONSE } from "data/home/defaultMetrics.data";
import { MAIN_METRICS } from "data/home/mainMetrics.data";
import { test, expect } from "fixtures/businessSteps.fixture";
import numeral from "numeral";

interface IMetricTestData {
  metricName: MAIN_METRICS;
  expected: string;
}

const formatNumber = (value: number): string => numeral(value).format("0.[0]a");
const formatCurrency = (value: number): string => "$" + formatNumber(value);

const metricsTestData: IMetricTestData[] = [
  {
    metricName: MAIN_METRICS.OrdersThisYear,
    expected: formatNumber(DEFAULT_METRICS_RESPONSE.Metrics.orders.totalOrders),
  },
  {
    metricName: MAIN_METRICS.NewCustomers,
    expected: formatNumber(DEFAULT_METRICS_RESPONSE.Metrics.customers.totalNewCustomers),
  },
  {
    metricName: MAIN_METRICS.CanceledOrders,
    expected: formatNumber(DEFAULT_METRICS_RESPONSE.Metrics.orders.totalCanceledOrders),
  },
  {
    metricName: MAIN_METRICS.TotalRevenue,
    expected: formatCurrency(DEFAULT_METRICS_RESPONSE.Metrics.orders.totalRevenue),
  },
  {
    metricName: MAIN_METRICS.AvgOrderValue,
    expected: formatCurrency(DEFAULT_METRICS_RESPONSE.Metrics.orders.averageOrderValue),
  },
];

test.describe("[UI] [Home] Main Metrics", () => {
  for (const { metricName, expected } of metricsTestData) {
    test(`Should display correct '${metricName}' metric`, async ({ loginAsLocalUser, homePage, mock }) => {
      await mock.metrics(DEFAULT_METRICS_RESPONSE);
      await loginAsLocalUser();

      const raw = await homePage.getMetricsValueByName(metricName);

      const actual = typeof raw === "string" ? raw.replace(/\$/g, "") : String(raw);
      const expectedClean = expected.replace(/\$/g, "");

      expect(actual).toBe(expectedClean);
    });
  }
});
