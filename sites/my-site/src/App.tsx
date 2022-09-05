import { useState } from 'react';
import logo from './logo.svg';
import { Button, Form } from 'antd';
import { CronEditor } from 'fa-cron-react-editor';
import 'fa-cron-react-editor/dist/index.css'
import 'antd/dist/antd.css';
import './App.css';

const formItemFullLayout = { labelCol: { span: 4 }, wrapperCol: { span: 19 } };

function App() {
    const [form] = Form.useForm();

    function onFinish(fieldValues:any) {
        console.log('onFinish', fieldValues)
    }

    return (
        <div>
            <div className='main'>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item name="cron" label="cron" rules={[{ required: true }]} {...formItemFullLayout}>
                        <CronEditor />
                    </Form.Item>
                </Form>
            </div>

            <div className='main'>
                <Button type='primary' onClick={() => form.submit()}>Hello</Button>
            </div>
        </div>
    );
}

export default App;
