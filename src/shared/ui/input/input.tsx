import { FC } from "react";
import classes from "./input.module.css";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const Input: FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} className={classes.input} />;
};
