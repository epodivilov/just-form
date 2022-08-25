import { FC, useState } from "react";
import { login } from "../../shared/api";
import { Button } from "../../shared/ui/button";
import { Divider } from "../../shared/ui/divider";
import { FromField } from "../../shared/ui/form-filed";
import { Input } from "../../shared/ui/input";
import { Link } from "../../shared/ui/link";
import { Text } from "../../shared/ui/text";

import classes from "./login-form.module.css";

export const LoginForm: FC = () => {
  const [status, setStatus] = useState<"success" | "fail" | "loading" | undefined>(undefined);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setStatus("loading");

    const response = await login({
      email: data.get("email") as string,
      password: data.get("password") as string,
    });

    setStatus(response.status);
  };

  let message = " ";
  let color: "success" | "error" | undefined = undefined;
  let ariaLive: "polite" | "assertive" | undefined = undefined;

  if (status === "success") {
    message = "Authorization was successful";
    color = "success";
    ariaLive = "polite";
  } else if (status === "fail") {
    message = "Authorization failed. Email or password is incorrect";
    color = "error";
    ariaLive = "assertive";
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.group}>
        <Text color="primary" size="large" el="h1">
          Log in
        </Text>
        <div className={classes.status} aria-live={ariaLive}>
          <Text color={color}>{message}</Text>
        </div>
      </div>
      <div className={classes.group}>
        <FromField label="Email">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </FromField>
        <FromField label="Password">
          <Input name="password" type="password" placeholder="Enter your password" minLength={10} required />
        </FromField>
      </div>
      <div className={classes.group}>
        <Button type="submit" disabled={status === "loading"}>
          Login
        </Button>
        <Link href="#restore">
          <Text size="small" el="span">
            Forgot email or password?
          </Text>
        </Link>
        <Divider>or</Divider>
        <Text color="secondary" size="small">
          Don't have an account? <Link href="#signup">Sign Up.</Link>
        </Text>
      </div>
    </form>
  );
};
