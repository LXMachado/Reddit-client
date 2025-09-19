import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./app/store";

test("renders app header", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("heading", { name: /Reddish/i })).toBeInTheDocument();
});
