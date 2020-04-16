import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'

const { Item } = Form
class WebForm extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    } 

    /**
     * 设置item
     */
    setFormItem (item) {
        if(item.custom) {
            return item.custom
        } else {
            switch(item.type) {
                case 'select' : // 下拉选择
                    return 
                        <Select style={item.itemInputStyle}>
                            {
                                Array.isArray(item.opts) ?
                                item.opts.map((opt, index) => (
                                    <Option key={index} value={opt[item.optionKey]? String(opt[item.optionKey]): opt.key}>
                                        {opt[item.optionName] ? opt[item.optionName] : opt.name}
                                    </Option>
                                ))
                                :
                                item.opts instanceof Object ?
                                Object.keys(item.opts).map((opt, index) => (
                                    <Option key={index} value={item.optionKey ? item.optionKey : key}>
                                        {item.optionKey ? item.opts[item.optionKey]: item.opts[key]}
                                    </Option>
                                )):
                                null
    
                            }
                        </Select>
                        break
                case 'self' : // 自定义
                    return
                        item.selfDom
                default:
                    return <Input placeholder={item.placeholder} style={item.itemInputStyle}/>
    
            }
        }
        
    }

    render () {
        const formItemLayout = {
            labelCol: {
                span: 10
            },
            wrapperCol: {
                span: 14
            }
        }
        const {itemOpts, formBtn, } = this.props
    
        const {getFieldDecorator} = this.props.form
        let displayType = this.props.displayType ? this.props.displayType : 'vertical'

        console.log('displayType=====', displayType)
        return (
            <Form {...formItemLayout} className={this.props.className?this.props.className: ''} layout={displayType} labelAlign="right">
                {
                    itemOpts.map((item, index) => {
                        
                        return  (
                            <Item  
                               
                                key={index}
                                label={item.label}
                                colon={false}
                            >
                                {
                                    getFieldDecorator(item.key, {
                                        initialValue: '',
                                        rules: item.rules
                                    })(
                                            
                                             this.setFormItem(item)
                                    )
                                }
                            </Item>
                        )
                    })
                }
                {
                    formBtn ? 
                        formBtn
                    : null
                }
            </Form>
        )
        
    }
}
export default Form.create()(WebForm)