import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddItemForm from ".";

const mockSetTodos = jest.fn();

describe("AddTodo", () => {
  describe("Render", () => {
    it("Should render form ", () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const ele = screen.getByRole("form");
      expect(ele).toBeInTheDocument();
    });
    it("Should render input text ", () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const ele = screen.getByRole("textbox");
      expect(ele).toBeInTheDocument();
    });
    it("Should render button ", () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const ele = screen.getByRole("button");
      expect(ele).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("Should able to add text to input ", async () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "Todo Item");
      expect(input).toHaveValue("Todo Item");
    });

    it("Should able to add text to input & enable button", async () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "Todo Item");
      const button = screen.getByRole("button");
      expect(button).toBeEnabled();
    });

    it("Should have form values entered by user ", async () => {
      render(<AddItemForm setTodos={mockSetTodos} />);
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "Todo Item");
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(mockSetTodos).toHaveBeenCalled();
      expect(input).toHaveValue("");
      await userEvent.type(input, "Todo Item");
      expect(screen.getByRole("form")).toHaveFormValues({
        title: "Todo Item",
      });
    });
  });
});
