import React, {Component} from 'react'

class ProductGroup extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {categoryList} = this.props
    return (
      <div>
          {
            categoryList.map((item, index) => {
              return (
                <div className="each-category">
                  <div>发动机组</div>
                  <div className="product-group">
                    <div className="each-product">
                        <img></img>
                        <div className="product-name"></div>
                    </div>
      
                  </div>
                </div>
              )
            })
          }
      </div>
    )
  }
}