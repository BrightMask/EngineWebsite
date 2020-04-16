import React, { Component } from 'react'
import { Layout, Row,Col } from 'antd';

import PageContainer from '../../components/pageContainer/pageContainer'
import IndexSwiper from '../../components/indexSwiper/indexSwiper'
import BrandList from '../../components/brandList/brandList'
import APIService from '../../service/APIService'
import {getSessionStorage, setSessionStorage} from '../../utils/utils'
import './style.css'

const { Header, Footer, Sider, Content } = Layout;

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brands: [],
            categorys: [],
            productList: [],
            catGroup: []
        }
    }

    shouldComponentUpdate() {
        return true
    }
    componentDidMount(){
        // this.fecthBrands() 
    }

    //查询品牌
    fecthBrands() {
        APIService.Product('BrandList', {}).then(res=> {
            if(res.code == 200) {
                let brands = res.data;
                if(res.data.length > 0) {
                    brands = brands.filter(item => item.stopflag == 0)
                }
                for(var i in brands) {
                    brands[i].cats = []
                }
                this.setState({
                    brands: brands
                }, () => {
                    console.log(brands)
                    this.chooseBrand()
                })
            }
        })
    }


    // 点击品牌查询分类
    chooseBrand() {
        let {brands} = this.state
        let categorys = []
       for(var i = 0; i < brands.length ; i++) {
            let params = {
                brandId: brands[i].id,
                stopflag: 0
            }
            APIService.Product('CatelogaryList', params).then(res => {
                if(res.code == 200) {
                    categorys = categorys.concat(res.data)
                    this.setState({
                        categorys: categorys
                    })
                }
                if(i ==  brands.length){
                    this.formatProductList()
                }
            })
           
       }
    }

    // 查询设备列表
    formatProductList() {
        let {brands, categorys} = this.state
        for(var i in brands) {
            brands[i]['cats'] = []

            for(var j in categorys) {
                if(brands[i].id == categorys[j].brandid) {
                    brands[i].cats.push(categorys[j])
                }
            }
        }

        let productList = []


        for(var i in categorys) {
            let params = {
                productid: categorys[i].productid,
                stopflag: 0
            }
            APIService.Product('ProductList', params).then(res => {
                if(res.code == 200) {
                    productList = productList.concat(res.data)
                    console.log(i)
                    if(i == categorys.length - 1) {
                        console.log('productList======', productList)
                    }
                }
            })
        }

        return false
        for(var x in brands) {
            for(var y in brands[x].cats) {
                let params = {
                    productid: brands[x].cats[y].productid,
                    stopflag: 0
                }
                APIService.Product('ProductList', params).then(res => {
                    productList =  productList.concat(res.data)
                    console.log('productList====', productList)
                    console.log('brands====', brands)

                    // productNum += res.data.length
                    // for(var i in list) {
                    //     if (list[i].modelparam && typeof JSON.parse(list[i].modelparam) == "object") {
                    //         let itemDetail = JSON.parse(list[i].modelparam)
                    //         list[i].modelparam = itemDetail
                    //         list[i].productImg = itemDetail.productImg
                    //         if(j == brands[x].cats.length ) {
                    //             brands[m].productCount = productNum
                    //         }
                    //     } 
                    // }
                    // brands[x].cats[y]['productList'] = list
                
                    // this.setState({
                    //     brands: brands
                    // }, () => {
                    //     console.log('brands======', brands)
                    // })
                })
            }
        }


        return false


        this.setState({
            brands: brands
        }, () => {
            console.log('brands', brands)
        })



        for(var m in brands) {
            let productNum = 0
            let cats = []
            for(var j in brands[m].cats) {
                let params = {
                    productid: brands[m].cats[j].productid,
                    stopflag: 0
                }
                APIService.Product('ProductList', params).then(res => {
                    let list =  res.data

                    console.log('list====', list)
                    productNum += res.data.length
                    for(var i in list) {
                        if (list[i].modelparam && typeof JSON.parse(list[i].modelparam) == "object") {
                            let itemDetail = JSON.parse(list[i].modelparam)
                            list[i].modelparam = itemDetail
                            list[i].productImg = itemDetail.productImg
                            if(j == cats.length - 1) {
                                brands[m].productCount = productNum
                            }
                        } 
                    }
                    brands[m].cats[j].prototype.productList = list
                
                    this.setState({
                        brands: brands
                    }, () => {
                        console.log('brands======', brands)
                    })
                })
            }
        }
       
    }



    render () {
        return (
            <Layout >
                <IndexSwiper />
                <BrandList />
                <Row style={{width: '80%', margin: '20px auto'}}>
                    <Col span={24} style={{fontSize: '24px'}}>
                        <div className="homepage-title">
                            <div className="homepage-title-right"></div>    
                            代理经销商
                        </div>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'start', padding: '0 30px', marginTop: 20}}>
                            <img src={require('../../assets/1.png')} style={{width: '30%'}}></img>
                            <ul style={{lineHeight: '40px', fontSize: '16px'}}>
                                <li>日本本田汽油发动机、发电机、水泵（1.5KVA~5.5KVA） 华东地区总代理维修中心</li>
                                <li>日本久保田柴油发电机 （3KVA-33KVA） 华东地区总代理</li>
                                <li>日本大洋汽、柴油发电机（2KVA-40KVA） 华东地区代理</li>
                                <li>富豪-雅图大型柴油发电机组（68-500KW） 华东地区代理</li>
                                <li>山特SANTAK UPS (500VA-80KVA) 华东地区代理</li>
                            </ul>
                        </div>
                      
                    </Col>
                   
                </Row>
            </Layout>
        )
    }
}
