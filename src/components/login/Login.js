import React from "react";
import { Button, Form, FormGroup,Label, Input } from "reactstrap";
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
    <Form className="login-form">
      <h1>
        <span className="font-weight-bold">KolayWMS</span>
      </h1>
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
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <Button onClick={handleLogin}>Sign in</Button>
            <p>
              Don't have an hasAccount ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <Button onClick={handleSignUp}>Sign up</Button>
            <p>
              Have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>
      <div className="text-center pt-3">VEYA</div>
      <GoogleLoginButton className="mt-3 mb-3" />
    </Form>
  );
};

export default Login;
