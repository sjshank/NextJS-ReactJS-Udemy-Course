import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from ".";

const mockTodo = {
  userId: 1,
  title: "Todo Item",
  completed: false,
  id: 1,
};

const mockSetTodo = jest.fn();

describe("TodoItem", () => {
  describe("Render", () => {
    it("Should render an article", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />); //ARRANGE
      const ele = screen.getByRole("article"); // ACT
      expect(ele).toBeInTheDocument(); // ASSERT
    });

    it("Should render a checkbox", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />);
      const ele = screen.getByRole("checkbox");
      expect(ele).toBeInTheDocument();
    });

    it("Should render a button", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />);
      const ele = screen.getByRole("button");
      expect(ele).toBeInTheDocument();
    });

    it("Should render a label", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />);
      const ele = screen.getByTestId("todo-item");
      expect(ele).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("Should call setTodo when checkbox clicked", async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />);
      const ele = screen.getByRole("checkbox");
      await userEvent.click(ele);
      expect(mockSetTodo).toHaveBeenCalled();
    });

    it("Should call setTodo when button clicked", async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodo} />);
      const ele = screen.getByRole("button");
      await userEvent.click(ele);
      expect(mockSetTodo).toHaveBeenCalled();
    });
  });
});
