import React from 'react'
import { Form, Input, Button, notification } from 'antd';
//import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/action';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Login = () => {
    const history = useHistory();//props.history
    const onFinish = user => {
        login(user)
            .then(()=>{//como subscribe en angular
                notification.success({ message: 'Usuario conectado éxito' });
                history.push('/')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };
    return (
        <div className="loginContainer">
            <Form
                className="loginForm"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'El email es requerido' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'La contraseña es requerida' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Conectarse
          </Button>
                </Form.Item>
            </Form>
            
        </div>
    );
}
export default Login;