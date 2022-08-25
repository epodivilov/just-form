import { FC } from "react";
import classes from "./link.module.css";

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
export const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <a {...rest} className={classes.link}>
      {children}
    </a>
  );
};
