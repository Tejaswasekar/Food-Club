import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body component with search functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByText("Search");

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  //   it should filter the restaurant cards

  const restaurantCard = screen.getAllByTestId("restaurant-card");

  expect(restaurantCard.length).toBe(1);

  expect(searchButton).toBeInTheDocument();
});

it("should render Top-Rated filter button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedButton = screen.getByTestId("top-rated-btn");

  fireEvent.click(topRatedButton);

  const restaurantCard = screen.getAllByTestId("restaurant-card");
  
  expect(restaurantCard.length).toBe(8);
});
