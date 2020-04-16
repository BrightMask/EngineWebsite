import React, {Component} from 'react';
import {Form, Input, Col, Row, Button, Tabs, Upload} from 'antd'
import {FormOpts} from '../../utils/categoryFormOpts'
import {serverUrl, uploadUrl} from '../../store/redux/ActionTypes'

import './style.css'
import APIService from '../../service/APIService';
import { func } from 'prop-types';
const {Item} = Form;
const { TabPane } = Tabs;

class ProductSave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            curForm: null,
            activeTab: 0,
            imgBase64: null,
            formParams: {
                alternator: null,
                engineForm: null,
                standard: null,
                accessory: null,
                other: null
            },
            colorArry: ['#48d1cc', '#3cb371', '#ffa500', '#1e90ff', '#20B2AA', '#5F9EA0']
        }

        this.mainForm = {
            formGroup: [
                {label: '名称', key: 'modelname',},
                {label: '简介', key: 'modeldescr'},
            ]
        }
       
    }

    componentDidMount() {
        if(this.props.location.category) {
            this.setState({
                category: this.props.location.category, 
                saveForm: FormOpts[this.props.location.category.productname]

            }, () => {
            })
        }

        if(this.props.location.productInfo) {
            let paramsInfo = JSON.parse(this.props.location.productInfo.modelparam)
            let detail = this.props.location.productInfo
            detail.modelparam = paramsInfo
            this.setState({
                productInfo: detail
            })
        }
      
       
    }

    shouldComponentUpdate(){
      return true
    }


    //点击保存
    handleSave() {

        let detailInfo = this.props.form.getFieldsValue()

        let params = {
            modelname: detailInfo.modelname,
            modeldescr: detailInfo.modeldescr,
            productid:this.state.category.productid,
            modelparam: null,
            stopflag: 0
        }

        delete detailInfo.modelname
        delete detailInfo.modeldescr
        detailInfo.productImg = this.state.imgBase64

        params.modelparam = JSON.stringify(detailInfo)
        if(this.state.productInfo) {
            params.modelid = this.state.productInfo.modelid
        }
        console.log('params=======', params)
       
        APIService.Product('ProductSave', params).then(res => {
            if(res.code == 200) {
                this.props.history.go(-1)
            }
        })
    }

    setActiveKey (key) {

        let {activeTab, curForm, formParams} = this.state
        let formItem = curForm.forms[activeTab]
        let formValues = this.props.form.getFieldsValue()

        let modeldImg  = formValues.modeldImg
        delete formValues.modelname
        delete formValues.modeldescr
        delete formValues.modeldImg
        this.setState({
            modeldImg: modeldImg
        })

        formParams[formItem.formName] = this.props.form.getFieldsValue()

        this.setState({
            activeTab: key
        })
    }

    photoCompress(file, w, objDiv) {
        var that = this
        var ready = new FileReader();
        /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
        ready.readAsDataURL(file);
        ready.onload = function () {
          var re = this.result;
          that.canvasDataURL(re, w, objDiv)
        }
    }

    canvasDataURL(path, obj, callback) {
        var img = new Image();
        img.src = path;
        img.onload = function () {
          var that = this;
          // 默认按比例压缩
          var w = that.width,
            h = that.height,
            scale = w / h;
          w = obj.width || w;
          h = obj.height || (w / scale);
          var quality = 0.7; // 默认图片质量为0.7
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(that, 0, 0, w, h);
          // 图像质量
          if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
          }
          // quality值越小，所绘制出的图像越模糊
          var base64 = canvas.toDataURL('image/jpeg', quality);
          // 回调函数返回base64的值
          callback(base64);
        }
      }

   
    uploadChange(info){
        var reader = new FileReader()
        var file  = info.file
        var imgUrlBase64;
        let that = this
        if(file) {

            if(file.size / 1024 > 20) {
                that.photoCompress(file,  {
                    quality: 0.1
                  }, function(base64Codes) {
                    that.setState({
                        imgBase64: base64Codes
                    },() => {
                        console.log('this.states====',that.state)
                    })
                  })
            } else {
                imgUrlBase64 = reader.readAsDataURL(file)

                reader.onload = function(e) {
                    that.setState({
                        imgBase64: reader.result
                    })
                }
           
            }
        }
      
    }

    normalFile(e) {
        if(Array.isArray(e)){
            return e
        }
        return e && e.fileList
    }

    beforeUpload(file) {
        let isJPG = file.type == 'image.gif' || file.type === 'image/bmp' || file.type === 'image/jpg' ||  file.type === 'image/jpeg' ||  file.type === 'image/png' ||  file.type === 'image/x-icon' || file.type === 'image/gif'   
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

    //点击取消
    handleCancel() {
        this.props.history.go(-1)
    }
   
    render() {
        let { curForm , activeTab, saveForm, colorArry, productInfo} = this.state
        const {getFieldDecorator} = this.props.form
        // 发动机
        const formItemLayout = {
            labelCol: { span: 12 },
            wrapperCol: { span: 12},
        };
       

        return (
            <div style={{width: '100%', background: '#fff', padding: 30}}>
                <Form {...formItemLayout} layout="inline" style={{marginBottom: 16}}>
                    <Row className="each-detail-form"  style={{border: "2px solid #fff", borderColor: 'rgb(149,216,246)', borderRadius: '8px'}}>
                        <Col span={24} className="each-form-title" style={{backgroundColor:"rgb(149,216,246)", color: '#fff', height: 40, lineHeight: '40px', fontSize: '18px', padding: "0px 8px"}} >
                             基础信息
                        </Col>
                        <Col style={{padding: "16px 8px"}} span={24}>
                            <Col span={8}>
                                <Item label="产品名称">
                                    {
                                        getFieldDecorator('modelname', {initialValue: productInfo && productInfo.modelname})(
                                            <Input ></Input>
                                        )
                                    }
                                </Item>
                            </Col>
                        
                            <Col span={8}>
                                <Item label="产品描述">
                                    {
                                        getFieldDecorator('modeldescr',  {initialValue: productInfo && productInfo.modeldescr})(
                                            <Input ></Input>
                                        )
                                    }
                                </Item>
                            </Col>
                            <Col span={8}>
                                <Item label="产品图片">
                                    {
                                        getFieldDecorator('productImg', {})(
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
                            </Col>
                        </Col>
                    </Row>
                </Form>
                <Form className="test" layout="inline" >
                {
                    saveForm && saveForm.forms && saveForm.forms.map((item, index) => 
                        (
                            <Row key={index} className="each-detail-form" style={{border: "2px solid #fff", borderColor: colorArry[index], borderRadius: '8px'}}>
                                <Col span={24} className="each-form-title" style={{backgroundColor:colorArry[index], color: '#fff', height: 40, lineHeight: '40px', fontSize: '18px', padding: "0px 16px"}} >
                                    {item.groupName}
                                </Col>
                                <Col span={24} style={{padding: "16px 8px"}}>
                                    {
                                        item && item.formGroup.map((formItem, index) => 
                                             (
                                                <Col xxl={6} xl={6} lg={8} md={12} key={index}>
                                                    <Form.Item  {...formItemLayout} label={formItem.label} key={index}>
                                                        {getFieldDecorator(formItem.key, {
                                                            initialValue: productInfo && productInfo.modelparam[formItem.key]
                                                        })(
                                                            <Input />
                                                        )}

                                                    </Form.Item>
                                                </Col>
                                            )
                                        )
                                    }
                                   
                                </Col>
                            </Row>
                        )
                    )
                }
                

                </Form>
              
                
              <Row type="flex" justify="center">
                  <Button style={{marginRight: 20}} onClick={this.handleCancel.bind(this)}>取消</Button>
                  <Button type="primary" onClick={this.handleSave.bind(this)}>保存</Button>
              </Row>
          </div>
        )
    }
}

export default Form.create()(ProductSave)