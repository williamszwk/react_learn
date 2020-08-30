import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.less";

class Login extends Component {
  formRef = React.createRef();
  onReset = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue({
      username: "admin",
      password: "admin",
    });
  };

  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
    const checkConfirm = (rule, value, callback) => {
      const length = value && value.length;
      const pwdReg = /^[a-zA-Z0-9_]+$/;
      if (!value) {
        callback("必须输入密码");
      } else if (length < 4) {
        callback("密码必须大于 4 位");
      } else if (length > 12) {
        callback("密码必须小于 12 位");
      } else if (!pwdReg.test(value)) {
        callback("密码必须是英文、数组或下划线组成");
      } else {
        callback(); // 必须调用 callback }
      }
    };
    return (
      <div className="login">
        <Form
          ref={this.formRef}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1>用户登录</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户命名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              { validator: checkConfirm },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Login;
