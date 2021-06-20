import React from "react";
import "babel-polyfill";
import {
  render,
  act,
  cleanup,
  screen,
  fireEvent,
} from "@testing-library/react";
import List from "../src/components/List";
import store from "../src/store";
import { Provider } from "react-redux";
import { sleep } from "./test_util";

describe("Render <List />, api succeed", () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            rates: {
              btc: {
                name: "Bitcoin",
                unit: "BTC",
                value: 1.0,
                type: "crypto",
              },
              eth: {
                name: "Ether",
                unit: "ETH",
                value: 16.283,
                type: "crypto",
              },
              ltc: {
                name: "Litecoin",
                unit: "LTC",
                value: 231.662,
                type: "crypto",
              },
              ntnt: {
                name: "Bitcoin",
                unit: "BTC",
                value: 1.0,
                type: "crypto",
              },
              qewq: {
                name: "Ether",
                unit: "ETH",
                value: 16.283,
                type: "crypto",
              },
              fas: {
                name: "Litecoin",
                unit: "LTC",
                value: 231.662,
                type: "crypto",
              },
            },
          }),
      })
    );
    await act(async () => {
      render(
        <Provider store={store}>
          <List />
        </Provider>
      );
    });
  });
  afterEach(cleanup);
  test("should contains element with classname of test-class", () => {
    expect(screen.getByTestId("test-id")).toBeDefined();
    expect(screen.getAllByTestId("list-cells")).toHaveLength(5);
  });

  test("click on next/last page", () => {
    const { getByTestId } = screen;
    const nextPageButton = getByTestId("next-page");
    const lastPageButton = getByTestId("last-page");
    fireEvent.click(nextPageButton);
    expect(screen.getAllByTestId("list-cells")).toHaveLength(1);
    fireEvent.click(lastPageButton);
    expect(screen.getAllByTestId("list-cells")).toHaveLength(5);
  });

  test("change list size per page", () => {
    const { getByTestId } = screen;
    fireEvent.change(getByTestId("select"), { target: { value: 10 } });
    expect(screen.getAllByTestId("list-cells")).toHaveLength(6);
  });
});
