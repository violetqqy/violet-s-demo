import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { connect } from 'react-redux'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
}

class Login extends React.Component {
  componentDidMount() {
    console.log(this.props.store)
  }
  onFinish = (values) => {
    console.log(values)
    // 模拟登录逻辑
    if (values.name === 'user' && values.password === 'user') {
      // 普通用户登录 设置 auth 为 user 登录后跳转到 /backend
      this.props.login('user')
      this.props.history.push('/backend')
    } else if (values.name === 'admin' && values.password === 'admin') {
      // 管理员登录 设置 auth 为 admin  登录后跳转到 /admin
      this.props.login('admin')
      this.props.history.push('/admin')
    } else {
      message.error('登录失败，请检查用户名密码是否正确！')
    }
  }

  render () {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>登录</h1>
        <Form
          {...layout}
          name="login"
          onFinish={this.onFinish}
        >
          <Form.Item
            label="name"
            name="name"
            value="name"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: auth => {
      dispatch({
        type: 'LOGIN',
        payload: auth
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
