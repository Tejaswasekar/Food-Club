import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  it("should render Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");

    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(loginButton).toBeInTheDocument();
  });

  it("should render the Header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)");

    expect(cartItems).toBeInTheDocument();
  });

  it("should render the Header component with cart items ", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart \(\d+\)/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should change Login button to Logout button onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
  });
  
});
