/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Testing for <AddCategory />", () => {
  const onNewCategory = jest.fn();
  const inputText = "One Punch";

  test("should be matched with the snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={onNewCategory} />);

    expect(container).toMatchSnapshot();
  });

  test("should be changed the input value", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: inputText } });

    expect(input.value).toBe(inputText);
  });

  test("should display the input with the placeholder", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");

    expect(input).toBeTruthy();
    expect(input.placeholder).toBe("Type anything...");
  });

  test("should call the onNewCategory function when submitting the form", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputText } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputText);
  });

  test("should not call the onNewCategory function when submitting the form with an empty input", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
