import { createElement, FC } from "react";
import classes from "./text.module.css";

type TextProps = {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error";
  size?: "small" | "medium" | "large";
  el?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export const Text: FC<TextProps> = ({ children, color, size, el = "p", ...rest }) => {
  return createElement(
    el,
    {
      ...rest,
      className: classes.text,
      "data-color": color,
      "data-size": size,
    },
    children
  );
};
