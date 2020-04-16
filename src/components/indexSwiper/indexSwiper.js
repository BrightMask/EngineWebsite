import React, { Component } from 'react';
import { Carousel } from 'antd';

import './indexSwiper.css'

export default class IndexSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners:[]
    }
  }

  onChange(a, b, c) {
  }

  render () {
    return (
      <Carousel style={{height: '40%'}} afterChange={this.onChange.bind(this)} className="xly-index-swiper" autoplay>
        <div style={{height: '40%',width: '100%'}} >
            <img style={{height: '40%',width: '100%'}} src={require('../../assets/brands/1.jpg')}/>
        </div>
        <div style={{height: '40%',width: '100%'}}>
          <img style={{height: '40%',width: '100%'}} src={require('../../assets/brands/2.jpg')}/>
          
        </div>
        {/* <div style={{height: '40%',width: '100%'}}>
          <img style={{height: '40%',width: '100%'}} src={require('../../assets/brands/3.jpg')}/>
        </div> */}
        <div style={{height: '40%',width: '100%'}}>
          <img style={{height: '40%',width: '100%'}} src={require('../../assets/brands/4.jpg')}/>
        </div>
      </Carousel>
    )
  }
}
