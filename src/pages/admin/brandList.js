import React, {Component} from 'react'
import {Form, Table, Row, Button, message} from 'antd'
import {connect } from 'react-redux'
import PageContainer from '../../components/pageContainer/pageContainer'
import APIService from '../../service/APIService'
import Webtable from '../../components/webTable/webTable'

import './style.css'
class BrandList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brands: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  componentDidMount() {
    this.fetchBrandList()
  }
  /**
   * 查询品牌列表
   */
  fetchBrandList() {
    let params = {
      stopflag: ''
    }
    APIService.Product('BrandList', params).then(res => {
      if(res.code == 200) {
        this.setState({
          brands: res.data
        })
      }
    })
  }

  /**
   * 点击详情按钮
   */
  handleDetail(record) {
    this.props.history.push({
      pathname: '/categoryList',
      state: record
    })
  }


  handleAdd() {
    this.props.history.push({
      pathname: '/brandSave',
    })
  }

  //点击停用，启用
  handleEdit(record){
    
    
  }

  render() {
    const columns = [
      {title: '品牌名称 ', dataIndex: 'brandname', key: 'brandname', width: '10%'},
      {title: '品牌描述', dataIndex: 'branddescr', key: 'branddescr', width: '65%'},
      {title: '品牌是否停用', dataIndex: 'stopflag', key: 'stopflag', width: '15%', render: (text, record, index) => (
        <span>{text== 0 ? '启用': '停用'}</span>
      )},
      {title: '操作', dataIndex: '', key: 'operation',  width: '10%', render: (text, record, index) => (
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button size="small" type="link" onClick={this.handleDetail.bind(this, record)}>详情</Button>
            <Button size="small" type="link" onClick={this.handleEdit.bind(this, record)}>{record.stopflag == 0 ? '停用': '启用'}</Button>
        </div>
      )},
    ]
    let {brands} = this.state
    return (
      <PageContainer>
          <div className="query-form-box"></div>

          <div className="page-table-container">
            <Button onClick={this.handleAdd.bind(this)} type="primary" style={{margin: 10}}>添加</Button>

            <Table 
              bordered
              size="small"
              ref={(ref) => {this._table = ref}}
              columns={columns}
              dataSource={brands}
            />
          </div>
          
         
      </PageContainer>
    )
  }


}
const mapStateToProps = (store) => ({
  type: store.Common.type,
  data: store.Common.data,
  status: store.Common.status,
})
export default connect(mapStateToProps)(Form.create()(BrandList))