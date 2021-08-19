import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import welcome from "../images/welcome.png";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      {/* <div id="background-img" class="background-img">
        <img src={welcome} />
      </div> */}
      <Form className="login-form">
        <div>
          <h1 className="text-center pt-3 font-weight-bold">KolayWMS</h1>
        </div>
        <FormGroup>
          <Input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta girin"
          />
          <p className="errorMsg">{emailError}</p>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifreyi girin"
          />
          <p className="errorMsg">{passwordError}</p>
        </FormGroup>
        <div>
          {hasAccount ? (
            <div>
              <Button className="button" onClick={handleLogin}>
                Sign in
              </Button>
              <p className="text-center pt-1">
                Don't have an hasAccount ?
                <span
                  className="use-button"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign up
                </span>
              </p>
            </div>
          ) : (
            <div>
              <Button className="button" onClick={handleSignUp}>
                Sign up
              </Button>
              <p className="text-center pt-1">
                Have an account ?
                <span
                  className="use-button"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign in
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="text-center pt-3">OR</div>
        <GoogleLoginButton className="mt-3 mb-3" />
      </Form>
    </section>
  );
};

export default Login;
