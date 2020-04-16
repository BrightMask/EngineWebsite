import React, {Component} from 'react'
import PageContainer from '../../components/pageContainer/pageContainer'
import {Row, Col, Carousel} from 'antd'
import '../../assets/style/common.css'
class AboutUs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="aboutus-page-container">
        <Row type='flex' justify='center'>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 20}}>
            <div className="block-title">关于我们</div>
          </Col>
          <Col className="company-info" span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 40}}>
            <p>上海进口发电机销售维修隶属于上海君力行贸易有限公司 在北京、郑州、太原、成都、武汉、济南等15个城市设有分公司和办事处。主要经营：国际知名品牌的汽、柴油发动机、发电机、电焊机、UPS不间断电源、发电机的维修保养、零配件供应。 
       公司凭借多年的良好信誉，与国内外许多知名厂商建立了战略合作伙伴关系，在国内拥有强大的销售服务网络，产品已渗透各个领域。我们愿以优良的产品质量、先进的技术性能、完善的售后服务与您取得良好的合作关系，共同进步，共同发展。</p>
          </Col>
        </Row>
        <Row style={{marginTop: 16}} type='flex'  justify='center'>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0',  marginBottom: 20}}>
            <div className="block-title">名下代理</div>
          </Col>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 20}}>
            <ul className="aboutus-list">
              <li>日本本田汽油发动机、发电机、水泵（1.5KVA~5.5KVA） 华东地区总代理维修中心</li>
              <li>日本雅马哈（0.55KVA-20KVA） 华东地区总代理维修中心</li>
              <li>日本久保田柴油发电机 （3KVA-33KVA） 华东地区总代理</li>
              <li>日本大洋汽、柴油发电机（2KVA-40KVA） 华东地区代理</li>
              <li>富豪-雅图大型柴油发电机组（68-500KW） 华东地区代理</li>
              <li>(精选.瑞典富豪VOLVO发动机. 配中英合资英格电机)</li>
              <li>山特SANTAK UPS (500VA-80KVA) 华东地区代理</li>
            </ul>
          </Col>
        </Row>
        <Row style={{marginTop: 16}} type='flex'  justify='center'>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0',  marginBottom: 20}}>
            <div className="block-title">资质证明</div>
          </Col>
          <Col span={14} style={{borderBottom: '1px solid #f0f0f0', marginBottom: 20}}>
            <Carousel autoplay>
              <div>
                <img className="about-us-qt" src={require('../../assets/1.png')}/>
              </div>
              <div>
                <img className="about-us-qt" src={require('../../assets/2.png')}/>
              </div>
              <div>
                <img className="about-us-qt" src={require('../../assets/3.png')}/>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AboutUs