import React, {Component} from 'react'
import { Tabs, Row, Col, Menu, Card} from 'antd';
import APIService from '../../service/APIService'
import MenuItem from 'antd/lib/menu/MenuItem';

const { Meta } = Card;
const { TabPane } = Tabs;

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorys: [],
            productList: [],
            catGroup: []
        }
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidMount() {
        this.fecthBrands()
    }

    //查询品牌
    fecthBrands() {
        APIService.Product('BrandList', {}).then(res=> {
            if(res.code == 200) {
                let brands = res.data;
                if(res.data.length > 0) {
                    brands = brands.filter(item => item.stopflag == 0)
                }
                this.setState({
                    brands: brands
                }, () => {
                    this.chooseBrand(brands[0])
                })
            }
        })
    }

    // 点击品牌查询分类
    chooseBrand(item) {
        sessionStorage.setItem('brandName', item.brandname)
        this.setState({
            productList: [],
        },() => {
            let params = {
                brandId: item.id,
                stopflag: 0
            }
            APIService.Product('CatelogaryList', params).then(res => {
                if(res.code == 200) {
                    this.setState({
                        categorys: res.data
                    }, () => {
                        this.formatProductList(res.data)
                        this.handleChooseCat(0) 
                    })
                }
            })
        })
    }


    // 切换tab
    handleChooseCat (activeKey) {
        let {categorys} = this.state
        let choosenCat = categorys[activeKey]
        sessionStorage.setItem('categoryName', categorys[activeKey].productname)
        this.setState({
            choosenCategory: choosenCat
        })

        console.log('categorys====', categorys)
        let params = {
            productid: choosenCat.productid,
            stopflag: 0
          }
          APIService.Product('ProductList', params).then(res => {
              let list =  res.data
              for(var i in list) {
                if (list[i].modelparam && typeof JSON.parse(list[i].modelparam) == "object") {
                    let itemDetail = JSON.parse(list[i].modelparam)
                    list[i].modelparam = itemDetail
                    list[i].productImg = itemDetail.productImg
                } 
              }
              this.setState({
                  productList: list
              })
          })
    }

    // 查询设备列表
    formatProductList(cats) {
        let productNum = 0
        let catGroup = []
       
        for(var j in cats) {
            let catItem = {
                name: cats[j].productname,
                productList: []
            }
            let params = {
                productid: cats[j].productid,
                stopflag: 0
            }
            APIService.Product('ProductList', params).then(res => {
                let list =  res.data
                productNum += res.data.length
                for(var i in list) {
                    if (list[i].modelparam && typeof JSON.parse(list[i].modelparam) == "object") {
                        let itemDetail = JSON.parse(list[i].modelparam)
                        list[i].modelparam = itemDetail
                        list[i].productImg = itemDetail.productImg


                        if(j == cats.length - 1) {
                            this.setState({
                                totalProductNum: productNum
                            })
                        }
                    } 
                }

                catItem.productList = list

                catGroup.push(catItem)

                this.setState({
                    catGroup: catGroup
                })

            })
        }
    }

    // 查看设备详情
    goProductDetail(item) {
        this.props.history.push({
            pathname: '/productDetail',
            state: item,
            category: this.state.choosenCategory
        })
    }
  

    render() {
        const { brands, categorys, productList, totalProductNum, catGroup} = this.state
        return (
            <Row style={{height: '100%',}}>
                <Row>
                    <img style={{display: 'block', width: '100%', height: '40%'}} src={require('../../assets/productBanner.jpg')}></img>
                </Row>
                <Row style={{width: '80%',  margin: '0 auto', padding: '30px 50px'}}>
                    <Col span={4}  style={{height: '100%', backgroundColor: '#fff', padding: "20px 16px"}}>
                        <div className="block-title">
                            产品中心
                        </div>
                        <Menu>
                            {
                                brands && brands.map((item, index) => {
                                    return (
                                    <Menu.Item key={index} onClick={this.chooseBrand.bind(this, item)}>{item.brandname}</Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                    <Col span={20} style={{height: '100%',  padding: 16}}>
                        {
                            totalProductNum > 20 ?

                            <Tabs onChange={this.handleChooseCat.bind(this)} defaultActiveKey="0">
                                {
                                    categorys && categorys.map((item, index) => {
                                        return (
                                            <TabPane tab={item.productname} key={index}>
                                                <Row justify="start" gutter={16}>
                                                    {
                                                        productList.map((item, index) => {
                                                            return (
                                                                <Col span={6} style={{height:260, minHeight: 260, marginBottom: 16}} onClick={this.goProductDetail.bind(this, item)}>
                                                                   
                                                                    <div className="each-product-card">
                                                                        <div className="each-product-img">
                                                                            <img src={item.productImg} />
                                                                        </div>
                                                                        <div className="each-product-name">{item.modelname}</div>
                                                                    </div>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </TabPane>
                                        )
                                    })
                                }
                            </Tabs>
                            :
                            <Row>
                                {
                                    catGroup.map((item, index) => (
                                        item.productList.length  == 0 ? 
                                            null
                                            :
                                            <Row key={index}>
                                                <Row className="cat-type-name">{item.name}</Row>
                                                <Row justify="start" gutter={16}>
                                                    {
                                                        item.productList.map((item, index) => {
                                                            return (
                                                                <Col span={6} style={{height:260, minHeight: 260, marginBottom: 16}} onClick={this.goProductDetail.bind(this, item)}>
                                                                    <div className="each-product-card">
                                                                        <div className="each-product-img">
                                                                            <img src={item.productImg} />
                                                                        </div>
                                                                        <div className="each-product-name">{item.modelname}</div>
                                                                    </div>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Row>
                                        
                                    ))
                                }
                            
                            </Row>
                           
                        }
                        

                    </Col>
                </Row>
                
            </Row>
        )
    }
}

export default ProductList