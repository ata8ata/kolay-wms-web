import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
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
              <Button
                className="btn-lg btn-dark btn-block"
                onClick={handleLogin}
              >
                Sign in
              </Button>
              <p>
                Don't have an hasAccount ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </div>
          ) : (
            <div>
              <Button
                className="btn-lg btn-dark btn-block"
                onClick={handleSignUp}
              >
                Sign up
              </Button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </div>
          )}
        </div>
        <div className="text-center pt-3">VEYA</div>
        <GoogleLoginButton className="mt-3 mb-3" />
      </Form>
    </section>
  );
};

export default Login;
