import React from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";

const LoginForm = () => (
  <Message>
    <Message.Header>Login</Message.Header>
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder="username" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder="password" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </Message>
);

export default LoginForm;
