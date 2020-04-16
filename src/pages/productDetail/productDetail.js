import React, { Component } from 'react'
import PageContainer from '../../components/pageContainer/pageContainer'
import {FormOpts} from '../../utils/categoryFormOpts'

import './style.css'
import { Row, Col } from 'antd'
import { runInThisContext } from 'vm';
class ProductDetail extends Component {
    constructor(props){
      super(props)
      this.state = {
        detail: null
      }
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState({
                detail: this.props.location.state, 
                saveForm: FormOpts[this.props.location.category.productname]
            }, () => {
                sessionStorage.setItem('detail', JSON.stringify(this.props.location.state))
                sessionStorage.setItem('saveForm', JSON.stringify(FormOpts[this.props.location.category.productname]))
                
                
                this.handleFilterParams()
            })
        }  else {
            this.setState({
                detail: JSON.parse(sessionStorage.getItem('detail')),
                saveForm: JSON.parse(sessionStorage.getItem('saveForm'))
            }, () => {
                this.handleFilterParams()
            })
            
            
        }
    }

    shouldComponentUpdate() {
        return true
    }

    handleFilterParams() {

        this.setState({
            brandName: sessionStorage.getItem('brandName'),
            categoryName: sessionStorage.getItem('categoryName')
        })
        let tableBasic = this.state.saveForm
        let productDetail = this.state.detail
        for(var i in tableBasic.forms) {
            for(var j in tableBasic.forms[i].formGroup) {
                tableBasic.forms[i].formGroup[j]['value'] = productDetail.modelparam[tableBasic.forms[i].formGroup[j]['key']]
            }        
        }

        for(var m in tableBasic.forms){
           tableBasic.forms[m].formGroup = tableBasic.forms[m].formGroup.filter(item => item.value != undefined)
        }

        this.setState({
            detailParams: tableBasic
        }, () => {
            sessionStorage.setItem('productPrams', JSON.stringify(tableBasic))
        })

    }

    render () {
        let {detail, saveForm, detailParams, brandName, categoryName} = this.state

        return (
            <div className="product-detail-page">
                 <Row>
                    <img style={{display: 'block', width: '100%', height: '40%'}} src={require('../../assets/detailBanner.jpg')}></img>
                </Row>

                <Row style={{padding: '25px 120px'}}>

                    <div className="product-detail-header">
                        <div className="page-name">产品展示 Products</div>

                        <div className="brand-category-name">
                            {brandName}
                            -
                            {categoryName}
                        </div>
                    </div>
                    <Row>
                        <Col span={8}>
                            <div className="product-name">
                                {detail && detail.modelname}
                            </div>
                            <div className="product-img">
                                <img style={{width: '80%', display: 'block', margin: '0 auto'}} src={detail&&detail.productImg}></img>
                            </div>
                            <div className="image-tips">图片仅供参考，以产品实物为准</div>
                            <div className="product-introduce"></div>
                        </Col>
                        <Col span={16}>
                            <div className="product-parameter">
                                {
                                    detailParams && detailParams.forms && detailParams.forms.map((item, index) => 
                                        (
                                        <Row>
                                            <Row className="each-param-title" style={{display: item.formGroup.length > 0 ? 'block': 'none'}}>{item.groupName}</Row>
                                            {
                                                item && item.formGroup.map((formItem, index) => (
                                                    <Row style={{display: formItem ? 'block' : 'none'}}>
                                                        <Col span={12}>
                                                            <div className="each-param-key">
                                                                {formItem.label}
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div  className="each-param-value">
                                                                {formItem.value}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                ))
                                            }
                                            
                                        </Row> 
                                        )
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
              
                </Row>
               
               
            </div>
      )
    }
}

export default ProductDetail
