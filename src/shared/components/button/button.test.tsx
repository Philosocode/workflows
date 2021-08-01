import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import { Button, IProps as IButtonProps } from "./button.component";

describe("Button", () => {
  let context: RenderResult;

  function renderWithProps(propOverrides: Partial<IButtonProps> = {}) {
    const props: IButtonProps = {
      color: "green",
      ...propOverrides,
    };

    context = render(<Button {...props} />);
  }

  it("renders the button", () => {
    const text = "Click Me";

    renderWithProps({ children: text });

    const { getByText } = context;

    expect(getByText(text)).toBeInTheDocument();
  });

  it("calls the callback when clicking on the button", () => {
    const onClick = jest.fn();

    renderWithProps({ onClick });

    const { getByRole } = context;

    fireEvent.click(getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
