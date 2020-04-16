import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Layout, Form, Button, Input, Checkbox } from 'antd'
import PageContainer from './components/pageContainer/pageContainer'
// import WebForm from './components/webForm/webForm'
import APIService from './service/APIService'
// import './assets/style/common.css'

const normalInputStyle = {
    width:261,
    height:46,
    background:'rgba(255,255,255,1)',
    borderRadius:2,
    border:'1px solid rgba(153,153,153,0.8)'
}
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageType: 'login'
        }
    }

    /**
     * 点击忘记密码
     */
    handleFroget() {
        this.setState({
            pageType: 'forget'
        })
    }

    /**
     * 点击新用户注册
     */
    handleSignup() {
        this.setState({
            pageType: 'signup'
        })
    }

    /**
     * 点击登录
     */
    handleFetchLogin(){
        location.href="./index.html"
        this.loginFrom.props.form.validateFields((err, values) => {
            if(err) {

            } else {
                APIService.UserAuth('Login', values).then((res) => {

                })
            }
        })
    }

    /**
     * 点击注册
     */
    handleFetchSignup() {
        this.loginFrom.props.form.validateFields((err, values) => {
            if(err) {

            } else {
                APIService.UserAuth('Signup', values).then((res) => {
                    
                })
            }
        })
    }

    /**
     * 点击重置密码
     */
    handleFetchReset() {
        this.loginFrom.props.form.validateFields((err, values) => {
            if(err) {

            } else {
                APIService.UserAuth('FindBack', values).then((res) => {
                    
                })
            }
        })
    }

    /**
     * 获取验证码
     */
    handleFetchCaptcha() {
        APIService.UserAuth('Captcha', params).then((res) => {
                    
        })
    }

    render() {
        // 登录输入项
        const loginFormOpts = [
            {label:'用户名', key: 'username', placeholder:'请输入手机号', itemInputStyle: normalInputStyle},
            {label:'密码', key: 'password', placeholder:'请输入密码', itemInputStyle: normalInputStyle},
            {label:'图形验证码', key: 'verifycode', placeholder:'请输入验证码', itemInputStyle: normalInputStyle}
        ]

        const loginBtn = (
            <div className="login-form-btn-group">
                <Button className="login-from-main-btn" onClick={this.handleFetchLogin.bind(this)}>登录</Button>
                <div className="login-form-other-btn-box">
                    <Button type="link" size="small" onClick={this.handleFroget.bind(this)}>忘记密码</Button>
                    <Button type="link" size="small" onClick={this.handleSignup.bind(this)}>新用户注册</Button>
                </div>
            </div>
        )

        // 注册输入项
        const signupFormOpts = [
            {label:'手机号', key: 'username', placeholder:'请输入手机号', itemInputStyle: normalInputStyle},
            {label:'图形验证码', key: 'verifycode', placeholder:'请输入图形验证码', itemInputStyle: normalInputStyle},
            {label:'短信验证码', key: 'mobilecode', placeholder:'请输入短信验证码', itemInputStyle: normalInputStyle},
            {label:'登录密码', key: 'password', placeholder:'请输入登录密码', itemInputStyle: normalInputStyle},
            {label:'确认登录密码', key: 'password2', placeholder:'请再次输入密码', itemInputStyle: normalInputStyle},
            {label:'设置支付密码', key: 'payword', placeholder:'请输入支付密码', itemInputStyle: normalInputStyle},
            {label:'确认支付密码', key: 'payword2', placeholder:'请再次输入支付密码', itemInputStyle: normalInputStyle},
        ]

        const signupBtn = (
            <div className="login-form-btn-group">
                <div>
                    <Checkbox></Checkbox>
                    注册即表示遵守
                    <a>《用户协议》</a>
                </div>
                <Button className="login-from-main-btn">登录</Button>
                
            </div>
        )

         // 忘记密码输入项
         const forgetFormOpts = [
            {label:'手机号', key: 'username', placeholder:'请输入手机号', itemInputStyle: normalInputStyle},
            {label:'图形验证码', key: 'verifycode', placeholder:'请输入图形验证码', itemInputStyle: normalInputStyle},
            {label:'短信验证码', key: 'mobilecode', placeholder:'请输入短信验证码', itemInputStyle: normalInputStyle},
            {label:'登录密码', key: 'password', placeholder:'请输入登录密码', itemInputStyle: normalInputStyle},
            {label:'确认登录密码', key: 'password2', placeholder:'请再次输入密码', itemInputStyle: normalInputStyle},
        ]

        const forgetBtn = (
            <div className="login-form-btn-group">
                <Button className="login-from-main-btn">确认重置密码</Button>
            </div>
        )

        const captchaDom = (
            <div>
                <Iput placeholder="请输入验证码"/>
                <img/>
            </div>
        )
        
        let { pageType } = this.state
        return (
            <PageContainer>
                <Layout 
                    className={
                        pageType === 'login' ?
                            'page-login-layout'
                        :
                            pageType === 'signup' ?
                            'page-signup-layout'
                            :
                            'page-forget-layout'

                    }
                >   
                    {
                        // <div className='page-login-name-box'>
                        //     <div className="page-login-name">用户登录</div>
                        //     <div className="page-login-name-en">User Login</div>
                        // </div>
                    }
                    
                    <div className="login-form-box">
                        <div className="login-form-title">
                            <img className="login-form-logo-img"></img>
                            <div className="login-form-logo-info">
                                <span className="login-from-name">300助手</span>
                                <span className="login-form-desc">安全租号官方平台</span>
                            </div>

                        </div>
                        <WebForm
                            wrappedComponentRef={ref => this.loginFrom = ref}
                            className="login-form"
                            itemOpts={
                                
                                pageType === 'login' ?
                                loginFormOpts
                                :
                                pageType === 'signup' ?
                                signupFormOpts
                                :
                                pageType === 'forget' ?
                                forgetFormOpts : null
                            
                            }
                            formBtn={
                                pageType === 'login' ?
                                loginBtn
                                :
                                pageType === 'signup' ?
                                signupBtn
                                :
                                pageType === 'forget' ?
                                forgetBtn : null
                            }
                        />
                    </div>
                </Layout>
            </PageContainer>
        )
    }
}
ReactDom.render(
    <LoginPage />,
    document.getElementById('root')
 );