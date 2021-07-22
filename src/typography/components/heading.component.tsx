import React from "react";
import clsx from "clsx";

type TProps = {
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type: "title" | "subtitle" | "subsubtitle" | "small";

  className?: string;
  variant?: "condensed";
  weight?: number;
};
export function Heading(props: TProps) {
  const HTag = props.element;

  const classes = clsx(
    // type
    props.type === "title" && ["text-4xl"],
    props.type === "subtitle" && ["text-3xl"],
    props.type === "subsubtitle" && ["text-2xl"],
    props.type === "small" && ["text-xl"],

    // variant
    props.variant === "condensed" && ["uppercase", "tracking-widest"],

    // weight
    props.weight ? `font-${props.weight}` : "font-bold",

    // user classes
    props.className,
  );

  return <HTag className={classes}>{props.children}</HTag>;
}
