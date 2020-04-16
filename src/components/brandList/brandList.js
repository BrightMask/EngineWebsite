import React, { Component } from 'react'

import './brandList.css'
export default class BrandList extends Component {
  constructor(props) {
        super(props);
        this.state = {
          brands: [
            {
              name: '本田',
              img: require('../../assets/brands/bt.png')
            },
            {
              name: '雅马哈',
              img: require('../../assets/brands/ymh.png')
            },
            {
              name: '大洋',
              img: require('../../assets/brands/dy.png')
            },
            {
              name: '泽藤',
              img: require('../../assets/brands/zt.png')
            },
            {
              name: '久保田',
              img: require('../../assets/brands/jbt.png')
            },
          ]
        }
    }

  render () {
    const { brands } = this.state
    return (
      <div className="homepage-brand-block">
          <div className="homepage-title">
            <div className="homepage-title-right"></div>
            <div>代理品牌</div>
          </div>
          <div className="xly-brandlist-group">
            
            
            {
              brands.map((item, index) => {
                return (
                  <div className="xly-brandlist-item" key={index}>
                    <div className="brand-logo">
                      <img src={item.img}/>
                    </div>
                    <div className="brand-name">{item.name}</div>
                  </div>
                )
              })
            }
          </div>
      </div>
      
     
    )
  }
}