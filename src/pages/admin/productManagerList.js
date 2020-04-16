import React, {Component} from 'react';
import PageContainer from '../../components/pageContainer/pageContainer'
import {Form, Table, Row, Button} from 'antd'
import {connect } from 'react-redux'
import APIService from '../../service/APIService'
import Webtable from '../../components/webTable/webTable'


class ProductManagerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null
    }
  }
  
  componentDidMount() {

    console.log('this.props.location', this.props.location)
    console.log("sessionStorage.getItem('category')", sessionStorage.getItem('category'))

    
    if(this.props.location.categroy) {
      console.log('this.props.location.categroy======', this.props.location.categroy)
      sessionStorage.setItem('category' , JSON.stringify(this.props.location.categroy))
      this.setState({
        category: this.props.location.categroy
      }, () => {
        this.fetchProductList(this.state.category.productid)
      })
    } else {

      console.log("sessionStorage.getItem('category')======", sessionStorage.getItem('category'))
      this.setState({
        category: JSON.parse(sessionStorage.getItem('category'))
      }, () => {
        this.fetchProductList(this.state.category.productid)
      })
    }
  }

  // 查询产品列表
  fetchProductList (id) {
    
    console.log('id====', id)
    let params = {
      productid: id,
      stopflag: 0
    }
    APIService.Product('ProductList', params).then(res => {
      console.log(res)
      this.setState({
        products: res.data
      })
    })
  }

  //点击新增
  handleAdd() {
    sessionStorage.setItem('category', JSON.stringify(this.state.category))
    this.props.history.push({
      pathname: '/productSave',
      category: this.state.category
    })
  }

  // 点击查看详情
  handleDetail(record) {
    this.props.history.push({
      pathname: '/productSave',
      category: this.state.category,
      productInfo: record
    })
  }


  render() {
    const columns = [
      {title: '产品名称 ', dataIndex: 'modelname', key: 'modelname'},
      {title: '产品描述', dataIndex: 'modeldescr', key: 'modeldescr'},
      {title: '产品是否停用', dataIndex: 'stopflag', key: 'stopflag', render: (text, record, index) => (
        <span>{text== 0 ? '启用': '停用'}</span>
      )},
      {title: '操作', dataIndex: '', key: 'operation', render: (text, record, index) => (
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button size="small" type="link" onClick={this.handleDetail.bind(this, record)}>详情</Button>
            <Button size="small" type="link">停用</Button>
        </div>
      )},
    ]
    let {products} = this.state
    return (
      <PageContainer>
          <div className="query-form-box"></div>
          <div className="page-table-container">
            <Button type="primary" onClick={this.handleAdd.bind(this)} style={{marginBottom: 16}}>添加产品</Button>
            <Table 
              bordered
              size="small"
              ref={(ref) => {this._table = ref}}
              columns={columns}
              dataSource={products}
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
export default connect(mapStateToProps)(Form.create()(ProductManagerList))