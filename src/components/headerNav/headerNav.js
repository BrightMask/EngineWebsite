import React, { Component } from 'react'

import './headerNav.css'

export default class HeaderNav extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="xly-header-menu-group">
        <div className="xly-header-menu-item">
          品牌
        </div>
        <div className="xly-header-menu-item">
          关于我们
        </div>
        <div className="xly-header-menu-item">
          技术支持
        </div>
        <div className="xly-header-menu-item">
          联系我们
        </div>
      </div>
    )
  }
}
