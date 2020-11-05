import {Form, Input, Button, Checkbox} from 'antd'
// import {connect} from 'react-redux'
import styles from './login.module.css'
import store from '../../store'
import {setUser} from '../../actions'

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
}



const Login = (props) => {
    const onFinish = (values) => {
        console.log('Success', values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const Login = () => {
        setTimeout(() => {
            store.dispatch(setUser({
                userName: 'Bob',
                role: '1'
            }))
            props.history.replace('/backend/table');
        }, 1000)
    }
    console.log(props)
    return (
        <div className={styles.loginWarpper}>
            <div className={`${styles.loginBox} loginBox`}>
                <Form {...layout} name="basic" initialValues = {{
                        remember: true
                    }}
                    onFinish = {onFinish}
                    onFinishFailed = {onFinishFailed}
                    >
                    <Form.Item label="用户名" name="username">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={
                        [{
                            required: true,
                            message: '密码不能为空'
                        }]
                    }>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item {...tailLayout} name="记住我" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={Login}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
