import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{ width: "630px", background: "white", borderRadius: "12px", padding: "90px 57px", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
        onFinish={onFinish}
      >
        <h1 style={{ fontSize: "32px", color: "#6A6D7C", textAlign: "center" }}>Login in to Account</h1>
        <p className="text-center">Please enter your email and password to continue</p>
        <div style={{ marginBottom: "24px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}> Email </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}

            />
          </Form.Item>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "5px" }} htmlFor="password">Password</label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>


        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="" style={{ color: "#6A6D7C"}}>Remember me</Checkbox>
          </Form.Item>
          <Link
            className="login-form-forgot font-semibold"
            style={{ color: "#F27405" }}
            to="/forgot-password"
          >
            Forgot password ?
          </Link>
        </div>

        <Form.Item
          style={{ marginBottom: 0 }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            style={{
              height: "52px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#F27405",
              marginTop: "56px",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
