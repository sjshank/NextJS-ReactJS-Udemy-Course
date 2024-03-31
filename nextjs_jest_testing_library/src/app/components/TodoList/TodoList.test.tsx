import { render, screen } from "@testing-library/react";
import TodoList from ".";

const mockTodos = [
  {
    userId: 1,
    title: "Todo Item 1",
    completed: false,
    id: 1,
  },
  {
    userId: 2,
    title: "Todo Item 2",
    completed: false,
    id: 2,
  },
];

const mockSetTodos = jest.fn();

describe("TodoList", () => {
  it("Should render 'No Todos Available' ", () => {
    render(<TodoList todos={[]} setTodos={mockSetTodos} />);
    const ele = screen.getByText("No Todos Available");
    expect(ele.childNodes[0]).toHaveTextContent("No Todos Available");
  });

  it("Should render correct number of items ", () => {
    render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);
    const eleArr = screen.getAllByTestId("todo-item-article");
    expect(eleArr).toHaveLength(mockTodos.length);
  });

  it("Should render items in correct order ", () => {
    render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);
    const eleArr = screen.getAllByTestId("todo-item");
    expect(eleArr[0].childNodes[0]).toHaveTextContent(mockTodos[0].title);
    expect(eleArr[1].childNodes[0]).toHaveTextContent(mockTodos[1].title);
    expect(eleArr[0].childNodes[0]).not.toHaveTextContent(mockTodos[1].title);
  });
});
