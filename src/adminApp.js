import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Layout, Menu} from 'antd'
import {connect } from 'react-redux'
import {adminRouters} from './router/router'
import {HashRouter, Redirect, Route, Switch, NavLink} from 'react-router-dom'
import './assets/style/common.css'

const { Header, Sider, Content} = Layout

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brands: []
    }
  }

  componentDidMount() {
    
  }

  // 查询品牌list
  fetchBrandList(){
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

  render () {
    return (
      <HashRouter hashHistory={history}>
        <Layout className="admin-page-container" >
        <Header style={{backgroundColor:'#fff'}}>
          管理平台
        </Header>
          <Layout>
            <Sider>
              <Menu className="header-nav-group" style={{borderBottom: 0}}>
                {
                    adminRouters.map((menuItem, index) => {
                        return (
                            <Menu.Item key={index} className="header-nav-item">
                              {
                                menuItem.show != false ?
                                <NavLink to={menuItem.path} className="header-nav-link">
                                  {menuItem.name}
                                </NavLink>: null
                              }
                          
                        </Menu.Item>
                        )
                    })
                }
              </Menu>

            </Sider>
            <Content>
              <Route key='/admin' path='/admin' exact render={()=> (<Redirect to={adminRouters[0].path} />)}  />
                {
                    adminRouters.map((item, index) => {
                        return (
                            <Route  key={item.path} path={item.path} component={item.component}  />
                        )
                    })
                }

            </Content>
            
          </Layout>
       
      </Layout>
      </HashRouter>
    )
  }
}
const mapStateToProps = (store) => ({
  type: store.Common.type,
  data: store.Common.data,
  status: store.Common.status,
})
export default connect(mapStateToProps)(AdminPage)