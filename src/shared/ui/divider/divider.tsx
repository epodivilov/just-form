import { FC } from "react";
import classes from "./divider.module.css";

type DividerProps = { children?: string };
export const Divider: FC<DividerProps> = ({ children }) => {
  return <span className={classes.divider}>
    <span className={classes.left}></span>
    <span>{children}</span>
    <span className={classes.right}></span>
  </span>;
};
