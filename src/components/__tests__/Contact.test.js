import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs Page test Cases", () => {
  it("should render ContactUs component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should render button component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should render Placeholder component", () => {
    render(<ContactUs />);

    const name = screen.getByPlaceholderText("Name");

    expect(name).toBeInTheDocument();
  });

  test("should render form component", () => {
    render(<ContactUs />);

    const inputboxes = screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(3);
  });
});
