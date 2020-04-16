import React, {Component} from 'react';
import {Card, Form, Input, Upload, Button, Row, Col, Select, message} from 'antd';
import {connect } from 'react-redux'
import APIService from '../../service/APIService'
import {uploadImgToBase64} from '../../utils/utils'
import {serverUrl, uploadUrl} from '../../store/redux/ActionTypes'

const {Item} = Form
const {TextArea} = Input
const {Option} = Select

const statusOpts = [
  {name: '停用', value: '1'},
  {name: '启用', value: '0'}
]
class CategorySave extends Component {
  constructor(props) {
    super(props)
    this.categoryOpts = [
      {name: '发电机组', value:'发电机组'},
      {name: '发电机', value: '发电机'},
      {name: '水泵', value: '水泵'},
      {name: '发动机', value: '发动机'},
      {name: '汽油发电机', value: '汽油发电机'},
      {name: '大功率汽油发电机', value: '大功率汽油发电机'},
      {name: '焊接用汽油发电机', value: '焊接用汽油发电机'},
      {name: '焊接用汽油发电机组', value: '焊接用汽油发电机组'},
      {name: '变频汽油发电机组', value: '变频汽油发电机组'},
      {name: 'TVS汽油发电机组', value: 'TVS汽油发电机组'},
      {name: '柴油发电机', value: '柴油发电机'},
      {name: '柴油发电机组', value: '柴油发电机组'},
    ]
    this.state = {
      brandId: null
    }
  }

  componentDidMount() {
    if(this.props.location.brandId) {
      sessionStorage.setItem('brandId' , this.props.location.brandId)
      this.setState({
        brandId: this.props.location.brandId
      })
    } else {
      this.setState({
        brandId: sessionStorage.getItem('brandId')
      })
    }
  }

  /**
   * 点击保存
   */
  handleSubmit() {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        let params = values
        params.brandid = this.state.brandId
        APIService.Product('CategorySave', params).then(res => {
          if(res.code == 200) {
            message.success('保存成功')
            this.props.history.push({
              pathname: '/categoryList'
            })
          }
        })
      }
    })
  }
  render() {
    const { getFieldDecorator} = this.props.form
    const {fileList} = this.state
    return (
      <div>
        <Card title="类别信息">
          <Col span={10} offset={7}>
            <Form>
              <Item label="类别名称">
                {
                  getFieldDecorator('productname',{
                    rules: [{
                      required:true,
                      message: '请输入类别名称'
                    }]
                  }
                  )(
                    <Select>
                      {
                        this.categoryOpts.map((item, index) => {
                          return (
                            <Option value={item.value} key={index}>{item.name}</Option>
                          )
                        })
                      }
                    </Select>
                  )
                }

              </Item>
              
              <Item label="类别状态">
                {
                  getFieldDecorator('stopflag',{
                    rules: [{
                      required:true,
                      message: '请选择类别状态'
                    }]
                  }
                  )(
                    <Select>
                      {
                        statusOpts.map((item, index)=> {
                          return <Option value={item.value} key={index}>{item.name}</Option>
                        })
                      }
                    </Select>
                  )
                }
              </Item>
              <Item label="类别简介">
                {
                    getFieldDecorator('productdescr',{
                      rules: [{
                        required:true,
                        message: '请输入类别简介'
                      }]
                    }
                    )(
                      <TextArea placeholder="请输入类别简介"/>
                    )
                  }
              </Item>
              <Item style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="default" style={{marginRight: 16}}>取消</Button>
                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>确认</Button>
              </Item>
            </Form>
          </Col>
        </Card>
      </div>
    )
  }
} 


const mapStateToProps = (store) => ({
  type: store.Common.type,
  data: store.Common.data,
  status: store.Common.status,
})
export default connect(mapStateToProps)(Form.create()(CategorySave))
