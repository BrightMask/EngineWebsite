import React, { Component } from 'react'
import {HashRouter, Redirect, Route, Switch, NavLink} from 'react-router-dom'
import { Layout,Menu } from 'antd'
import {routes} from './router/router'
import { Loadable } from 'react-loadable'
import './assets/style/common.css'
const { Header, Content , Footer} = Layout
const menuStyle = {
    color: "rgba('299, 255, 255, 0,75')"
}
class App extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showUserPanel: false, // 用户信息浮层
        }
    }

    /**
     * 组件渲染完成
     */
    componentDidMount() {
        // let currentPage = this.props.location.path
        console.log(this.props)
    }
    /**
     * 展示顶部用户信息
     */
    handeShowUserPanel (){
        this.setState({
            showUserPanel: !this.state.showUserPanel
        }) 
    }

    /**
     * 退出
     */
    loginOut() {
        location.href= './login.html'
    }

    /**
     * 进入用户详情
     */
    goSelfPage() {
        
    }
     
    render () {
        let { showUserPanel } = this.state
        return (
            <HashRouter hashHistory={history}>
                 <Layout className="homepage-layout">
                    <Header className="home-page-header">
                        <div className="header-box">
                            <div className="header-logo-box">
                                上海君力行贸易有限公司（上海进口发电机销售维修）
                                <img className="header-logo-img"></img>
                            </div>
                            <Menu mode="horizontal" className="header-nav-group">
                                {
                                    routes.map((menuItem, index) => {
                                        return (
                                            menuItem.show != false ?
                                                <Menu.Item key={index} className="header-nav-item">
                                                    <NavLink to={menuItem.path} className="header-nav-link">
                                                        {menuItem.name}
                                                    </NavLink>
                                                </Menu.Item>
                                                : null
                                        )
                                    })
                                }
                                
                            </Menu>
                        </div>
                    </Header>   
                    <div className="homepage-content">
                        <Route path="/" component={routes[0].component} exact />
                        {
                            routes.map((item, index) => {
                                return (
                                    <Route  key={item.path} path={item.path} component={item.component}/>
                                )
                            })
                        }
                        
                    </div>
                    <Footer style={{height: 140, backgroundColor: '#3d3d45',color:'#999', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>© 2006-2014上海君力行贸易有限公司（上海进口发电机销售维修） 版权所有 网站地图</div>
                        <div>专营各类进口发电机 汽油发电机 柴油发电机 本田发电机 雅马哈发电机 大洋发电机 泽藤发电机</div>
                        <div>
                            <ul style={{display: 'inline', listStyle: 'none'}}>
                                <li style={{display: 'inline', height: 30, lineHeight: '30px', margin: '0 10px'}}>沪公网安备 31011202005253号</li>
                                <li style={{display: 'inline',height: 30, lineHeight: '30px', margin: '0 10px'}}>沪ICP备07501070号</li>
                                <li style={{display: 'inline',height: 30, lineHeight: '30px', margin: '0 10px'}}><img src={require('./assets/wangan.png')}></img></li>
                            </ul>
                        </div>

                    </Footer>
                </Layout>
               
            </HashRouter>
        )
    }
}
export default App