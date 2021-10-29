import { render } from "@testing-library/react";

import AppWrapper from "./AppWrapper";
import App from "./App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

test("shound render App", () => {
  const screen = render(
    <AppWrapper>
      <App />
    </AppWrapper>
  );

  expect(screen).toBeTruthy();
});
