import { render } from "@testing-library/react";

import AppWrapper from "../AppWrapper";
import App from "../App";

test("shound render App", () => {
  const screen = render(
    <AppWrapper>
      <App />
    </AppWrapper>
  );

  expect(screen).toBeTruthy();
});
