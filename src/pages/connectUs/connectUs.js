import React, {Component} from 'react'
import {Row, Col, Icon} from 'antd'
import '../../assets/style/common.css'
class AboutUs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
          <Row>
              <img style={{display: 'block', width: '100%', height: 'auto'}} src={require('../../assets/contactBanner.jpg')}></img>
          </Row>
        <Row type='flex' justify='center' style={{paddingTop: 30}}>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 20}}>
            <div className="block-title">联系我们</div>
          </Col>
          <Col span={12} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 20}}>
            <img style={{width: '100%', height: 'auto'}} src={require('../../assets/location.png')}/>
          </Col>
          <Col className="contact-info" span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 40}}>
          <ul className="contactus-list">
              <li>
                <span className="contactus-title">
                <Icon type="home" className="icon" style={{fontSize: 20}}/>
                  地址：
                </span>上海市闵行区虹梅南路2555弄2号102室</li>
              <li><span className="contactus-title">
              <Icon type="phone" className="icon" style={{fontSize: 20}}/>电话：</span>021-64396318 54400929</li>
              <li><span className="contactus-title"><Icon type="laptop" className="icon" style={{fontSize: 20}}/>传真：</span>(021)54400717</li>
              <li><span className="contactus-title">
              <Icon type="user" className="icon" style={{fontSize: 20}}/>联系人：</span>胡先</li>
              <li><span className="contactus-title">
              <Icon type="mobile" className="icon" style={{fontSize: 20}}/>手机：</span>13818184206</li>
              <li><span className="contactus-title">
              <Icon type="mail" className="icon" style={{fontSize: 20}}/>邮箱：</span>jkfdj@jkfdj.com.cn</li>
           
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AboutUs