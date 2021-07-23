import React from "react";
import clsx from "clsx";

export interface IProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  type: "title" | "subtitle" | "subsubtitle" | "small";

  className?: string;
  variant?: "condensed";
}
export function Heading(props: IProps) {
  const HTag = props.tag;

  const classes = clsx(
    "font-bold",

    // type
    props.type === "title" && ["text-4xl"],
    props.type === "subtitle" && ["text-3xl"],
    props.type === "subsubtitle" && ["text-2xl"],
    props.type === "small" && ["text-xl"],

    // variant
    props.variant === "condensed" && ["uppercase", "tracking-widest"],

    // user classes
    props.className,
  );

  return <HTag className={classes}>{props.children}</HTag>;
}
