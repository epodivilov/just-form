import { FC } from "react";
import classes from "./button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      {children}
    </button>
  );
};
