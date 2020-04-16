// 前台界面
import HomePage from '../pages/homePage/homePage'
import ProductList from '../pages/productList/productList'
import AboutUs from '../pages/aboutUs/aboutUs'
import Support from '../pages/support/support'
import ConnectUs from '../pages/connectUs/connectUs'
import ProductDetail from '../pages/productDetail/productDetail'

// 后台配置模块
import BrandList from '../pages/admin/BrandList'
import BrandSave from '../pages/admin/brandSave'
import CategoryList from '../pages/admin/categoryList'
import CategorySave from '../pages/admin/categorySave'
import ProductManagerList from '../pages/admin/productManagerList'

import ProductSave from '../pages/admin/productSave'

const routes = [
    {
        
        name: '官网首页',
        component: HomePage,
        path:'/homepage',
        children: [],
    },
    {
        name: '产品中心',
        component: ProductList,
        path:'/productList',
        children: [],
    },
    {
        name: '产品详情',
        component: ProductDetail,
        path:'/productDetail',
        children: [],
        show: false,
    },
    {
        name: '关于我们',
        component: AboutUs,
        path:'/aboutUs',
        children: [],
        show: false,
    },
    {
        name: '技术支持',
        component: Support,
        path:'/support',
        children: [],
        show: false
    },
    {
        name: '联系我们',
        component: ConnectUs,
        path:'/connectUs',
        children: [],
    },
]

const adminRouters = [
    {
        name: '品牌',
        component: BrandList,
        path: '/BrandList',
        children: []
    },


    {
        name: '品牌保存',
        component: BrandSave,
        path: '/brandsave',
        children: [],
        show: false
    },
    {
        name: '类目',
        component: CategoryList,
        path: '/categoryList',
        children: [],
        show: false
    },
    {
        name: '类目保存',
        component: CategorySave,
        path: '/categorySave',
        children: [],
        show: false
    },
    {
        name: '产品列表',
        component: ProductManagerList,
        path: '/productManagerList',
        children: [],
        show: false
    },
    {
        name: '产品保存',
        component: ProductSave,
        path: '/productSave',
        children: [],
        show: false
    },
]

export {routes, adminRouters}