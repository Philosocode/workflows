import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { Heading, IProps as IHeadingProps } from "./heading.component";

describe("Heading", () => {
  let context: RenderResult;

  function renderWithProps(propOverrides: Partial<IHeadingProps> = {}) {
    const props: IHeadingProps = {
      tag: "h1",
      type: "title",
      children: "Hello World",
      ...propOverrides,
    };

    context = render(<Heading {...props} />);
  }

  it("renders the heading", () => {
    const text = "Hello, World";

    renderWithProps({ children: text });

    const { getByText } = context;

    expect(getByText(text)).toBeInTheDocument();
  });

  it("renders the appropriate type of heading", () => {
    const tag = "h6";

    renderWithProps({ tag });

    const { container } = context;
    expect(container.querySelector(tag)).toBeInTheDocument();
  });

  it("includes a custom classname if provided", () => {
    const className = "my-class";

    renderWithProps({ className });

    const { container } = context;
    expect(container.firstChild).toHaveClass(className);
  });
});
