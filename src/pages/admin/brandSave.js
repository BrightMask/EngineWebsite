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
class BrandSave extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
      imgBase64: null
    }
  }


  /**
     * 监听上传收款码
     */
    uploadChange(info){
      console.log('info=====', info)
      var reader = new FileReader()
      var file  = info.file
      var imgUrlBase64;
      var that = this
      if(file) {
        imgUrlBase64 = reader.readAsDataURL(file)
        reader.onload = function(e) {
          that.setState({
            imgBase64: reader.result
          })
        }
      }
      
  };

  normalFile(e) {
    if(Array.isArray(e)){
        return e
    }
    return e && e.fileList
  }

    beforeUpload(file) {
      let isJPG = file.type == 'image.gif' || file.type === 'image/bmp' || file.type === 'image/jpg' ||  file.type === 'image/jpeg' ||  file.type === 'image/png' ||  file.type === 'image/x-icon'    
      if(!isJPG) {
          message.error('请上传正确的图片格式文件')
          return false
      } 
      let isLt5M = file.size/1024/1024 < 5
      if(!isLt5M) {
          message.error('图片大小不能超过5M')
          return false
      }

      
      return false
      
    }


  /**
   * 点击保存
   */
  handleSubmit() {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        let params = values
        params.ibrandlogmg = this.state.imgBase64
        APIService.Product('BrandSave', params).then(res => {
          if(res.code == 200) {
            message.success('保存成功')
            this.props.history.push({
              pathname: '/BrandList'
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
        <Card title="品牌信息">
          <Col span={10} offset={7}>
            <Form>
              <Item label="品牌名称">
                {
                  getFieldDecorator('brandname',{
                    rules: [{
                      required:true,
                      message: '请输入品牌名称'
                    }]
                  }
                  )(
                    <Input placeholder="请输入品牌名称"/>
                  )
                }

              </Item>
              <Item label="品牌Logo">
                {
                  getFieldDecorator('ibrandlogmg',{
                    rules: [{
                      required:true,
                      message: '请选择图片上传'
                    }]
                  }
                  )(
                    <Upload 
                      action={uploadUrl}
                      onChange={this.uploadChange.bind(this)}
                      fileList={this.state.fileList}
                      showUploadList={false}
                      beforeUpload={this.beforeUpload.bind(this)}
                    >
                      <Button icon="upload" type="default">选择文件上传</Button>
                    </Upload>
                  )
                }
              </Item>
              <Item label="品牌状态">
                {
                  getFieldDecorator('stopflag',{
                    rules: [{
                      required:true,
                      message: '请选择品牌状态'
                    }]
                  }
                  )(
                    <Select>
                      {
                        statusOpts.map((item, index)=> {
                          return <Option value={item.value}>{item.name}</Option>
                        })
                      }
                    </Select>
                  )
                }
              </Item>
              <Item label="品牌简介">
                {
                    getFieldDecorator('branddescr',{
                      rules: [{
                        required:true,
                        message: '请输入品牌简介'
                      }]
                    }
                    )(
                      <TextArea placeholder="请输入品牌简介"/>
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
export default connect(mapStateToProps)(Form.create()(BrandSave))
