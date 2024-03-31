import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it('should have header "Next App Header', () => {
    render(<Header title="Next App Header" />);

    const ele = screen.getByRole("heading", {
      name: "Next App Header",
    });

    expect(ele).toBeInTheDocument();
  });
});
