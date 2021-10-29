import { render, fireEvent } from "@testing-library/react";
import reactRouter from "react-router";

import AppWrapper from "../../AppWrapper";
import Header from "../Header";

describe("Header Tests", () => {
  it("should render Fashion nav active when pressed", () => {
    const useLocation = jest.spyOn(reactRouter, "useLocation");
    useLocation.mockImplementation(() => ({
      pathname: "/fashion",
      search: "",
      state: undefined,
      hash: "",
    }));
    const screen = render(
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
    const navFashionLink = screen.getByTestId(`nav:/fashion`);
    expect(navFashionLink).toBeTruthy();
    fireEvent.click(navFashionLink);
    expect(navFashionLink).toHaveClass("active");
  });
  it("should render Architecture nav active when pressed", () => {
    const useLocation = jest.spyOn(reactRouter, "useLocation");
    useLocation.mockImplementation(() => ({
      pathname: "/architecture",
      search: "",
      state: undefined,
      hash: "",
    }));
    const screen = render(
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
    const navFashionLink = screen.getByTestId(`nav:/architecture`);
    expect(navFashionLink).toBeTruthy();
    fireEvent.click(navFashionLink);
    expect(navFashionLink).toHaveClass("active");
  });
  it("should render Nature nav active when pressed", () => {
    const useLocation = jest.spyOn(reactRouter, "useLocation");
    useLocation.mockImplementation(() => ({
      pathname: "/nature",
      search: "",
      state: undefined,
      hash: "",
    }));
    const screen = render(
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
    const navFashionLink = screen.getByTestId(`nav:/nature`);
    expect(navFashionLink).toBeTruthy();
    fireEvent.click(navFashionLink);
    expect(navFashionLink).toHaveClass("active");
  });
});
