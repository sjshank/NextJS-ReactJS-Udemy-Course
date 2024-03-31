import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  it("should add todo, clear input box on button clicked & render inside list ", async () => {
    render(<Home />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    await userEvent.type(input, "Todo Item Text");
    expect(input).toHaveValue("Todo Item Text");

    const button = screen.getByRole("button", {
      name: "Submit",
    });
    await userEvent.click(button);
    expect(input).toHaveValue("");

    const ele = (await screen.findByText(/Todo Item text/i)) as HTMLElement;
    expect(ele).toHaveTextContent("Todo Item Text");
  });

  it("Should update todo item ", async () => {
    render(<Home />);
    const eleArr = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    await userEvent.click(eleArr[0]);
    expect(eleArr[0]).toBeChecked();
  });

  it("Should delete todo item ", async () => {
    render(<Home />);
    const eleArr = (await screen.findAllByTestId(
      "delete-button"
    )) as HTMLInputElement[];
    const articleArr = (await screen.findAllByRole(
      "article"
    )) as HTMLInputElement[];
    console.log(articleArr[0].childNodes[0].textContent); //  Write Code 💻
    console.log(articleArr[1].childNodes[0].textContent); //  Go to Work ⚒
    await userEvent.click(eleArr[0]);
    expect(articleArr[0]).not.toBeInTheDocument();
    expect(articleArr[1]).toBeInTheDocument();
  });
});
