import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../Mocks/restaurantCardMockData.json";
import { BrowserRouter } from "react-router-dom";

describe("Restaurant Card test cases", () => {
  it("should render restaurant cards with props Data", () => {
    render(
      <BrowserRouter>
        <RestaurantCard resData={MOCK_DATA} />
      </BrowserRouter>
    );

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
  });

  it("should render restaurant component with promoted label", () => {
    const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
    render(
      <BrowserRouter>
        <RestaurantCardWithPromotedLabel resData={MOCK_DATA} />
      </BrowserRouter>
    );
    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
  });
  
});
