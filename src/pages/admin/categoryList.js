import React, {Component} from 'react'
import PageContainer from '../../components/pageContainer/pageContainer'
import {Table, Button, Form} from 'antd'
import {connect } from 'react-redux'

import APIService from '../../service/APIService';

class CategoryList extends Component {
  constructor(props){
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
      categorys: [],
      choosenBrand: null
    }
  }

  componentDidMount() {
    if(this.props.location.state) {
      sessionStorage.setItem('choosenBrand' , JSON.stringify(this.props.location.state))
      this.fetchCateloagry(this.props.location.state.id, 0)
      this.setState({
        choosenBrand:this.props.location.state
      })
    } else {

      console.log("sessionStorage.getItem('choosenBrand')=====", JSON.parse(sessionStorage.getItem('choosenBrand')))
      this.fetchCateloagry(JSON.parse(sessionStorage.getItem('choosenBrand')).id, 0)
      this.setState({
        choosenBrand:sessionStorage.getItem('choosenBrand')
      })
    }
  }

  fetchCateloagry(id, stopflag) {
    let params = {
      brandId: id ? id : sessionStorage.getItem('brandId'),
      stopflag: stopflag
    }
    APIService.Product('CatelogaryList', params).then(res => {
      if(res.code == 200) {
        this.setState({
          categorys: res.data

        })
      }
    })
  }


  //点击添加
  handleAdd() {
    this.props.history.push({
      pathname: '/categorySave',
      brandId: this.state.choosenBrand.id
    })
  }

  //点击查看详情
  // handleDetail(id) {
  //   this.props.history.push({
  //     pathname: '/productlist',
  //     productId: id
  //   })
  // }

  // 停用启用
  handleStop(record) {
    let params = record
    params.stopflag = record.stopflag == 1 ? 0 : 1
    APIService.Product('CategorySave', params).then(res => {
      if(res.code == 200) {
        message.success('操作成功！')
        this.fetchBrandList()
      }else {
        this.fetchCateloagry(sessionStorage.getItem('brandId'), 0)
      }
    })
  }
  // 点击查看产品
  handleViewProduct(record) {
    this.props.history.push({
      pathname: '/productManagerList',
      categroy: record
    })
  }

  render(){
    const columns = [
      {title: '类别名称 ', dataIndex: 'productname', key: 'productname', width: '20%'},
      {title: '类别描述', dataIndex: 'productdescr', key: 'productdescr', width: '40%'},
      {title: '品牌是否停用', dataIndex: 'stopflag', key: 'stopflag', width: '20%', render: (text, record, index) => (
        <span>{text== 0 ? '启用': '停用'}</span>
      )},
      {title: '操作', dataIndex: '', key: 'operation',width: '20%', render: (text, record, index) => (
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button size="small" type="link" onClick={this.handleViewProduct.bind(this, record)}>查看设备</Button>
            <Button size="small" type="link">修改</Button>
            <Button size="small" type="link" onClick={this.handleStop.bind(this, record)}>{record.stopflag == 0 ? '停用' : '启用'}</Button>
        </div>
      )},
    ]
    let {categorys} = this.state
    return (
      <PageContainer>
        <div className="query-form-box"></div>
          <div className="page-table-container">
            <Button type="primary" onClick={this.handleAdd.bind(this)} style={{marginBottom: 16}}>添加类别</Button>
            <Table 
              bordered
              size="small"
              ref={(ref) => {this._table = ref}}
              columns={columns}
              dataSource={categorys}
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
export default connect(mapStateToProps)(Form.create()(CategoryList))
