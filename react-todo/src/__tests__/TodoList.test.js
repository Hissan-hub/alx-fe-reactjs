import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {

  test("renders Todo List heading", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, {
      target: { value: "Test Task" }
    });

    fireEvent.click(button);

    expect(screen.getByText("Test Task"))
      .toBeInTheDocument();
  });

  test("toggles a task", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, {
      target: { value: "Toggle Task" }
    });

    fireEvent.click(button);

    const task = screen.getByText("Toggle Task");

    fireEvent.click(task);

    expect(task).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a task", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, {
      target: { value: "Delete Task" }
    });

    fireEvent.click(button);

    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Delete Task"))
      .not.toBeInTheDocument();
  });

});