import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class myForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    showModal = () => {
        this.setState({ visible: true })
    }


    hideModal = () => {
        this.setState({ visible: false })
    }

    render() {
        const { getFieldProps } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('操作成功!');
        }

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    id="control-input"
                    label="姓名"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder="Please enter..."
                    {...getFieldProps('userName')} />
                </FormItem>

                <FormItem
                    label="工作时间"
                    labelCol={{ span: 3 }}>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('startDate')} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('endDate')} />
                        </FormItem>
                    </Col>
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="爱好"
                    {...formItemLayout}>
                    <Input type="textarea" id="control-textarea" rows="3"
                    {...getFieldProps('content')} />
                </FormItem>

                <FormItem
                    id="select"
                    label="擅长"
                    {...formItemLayout}>
                    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                        {...getFieldProps('people')}>
                        <Option value="javascript">javascript</Option>
                        <Option value="html">html</Option>
                        <Option value="csss" disabled>css</Option>
                        <Option value="python">python</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="喜欢的水果"
                    {...formItemLayout}
                >
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>猕猴桃</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>苹果</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>香蕉</Checkbox>
                </FormItem>

                <FormItem
                    label="最喜欢的颜色"
                    {...formItemLayout} >
                    <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}>
                        <Radio value="yellow">黄</Radio>
                        <Radio value="blue">蓝</Radio>
                        <Radio value="green">绿</Radio>
                        <Radio value="red">红</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.showModal}>弹窗</Button>
                </FormItem>
                <Modal title="提示" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
                    这是一个modal
                </Modal>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)

export default myForm