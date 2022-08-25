import { FC } from "react";
import classes from "./form-field.module.css";

type FromFieldProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  label: string;
  error?: string;
};
export const FromField: FC<FromFieldProps> = ({ children, label, error, ...rest }) => {
  return (
    <label {...rest} className={classes.field}>
      <span className={classes.label}>{label}</span>
      {children}
    </label>
  );
};
