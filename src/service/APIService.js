import { ActionTypes, Status } from '../store/redux/ActionTypes'
import RequestTool from './requestTool'


export default class APIService {
    static handleDispatch(type, data, dispatch, status) {
        return dispatch({
            reduceType: ActionTypes.BASE,
            type: type,
            data: data,
            status: status

        })
    }

    static handleRequest(actionType, request) {
        return (dispatch) => {
            this.handleDispatch(actionType, {}, dispatch, Status.LOADING);
            fetch(
                request
            ).then((response)=> 
                response.json()
            ).then((json) => {
                this.handleDispatch(actionType, json, dispatch, Status.SUCCESS)
            }).catch((err) =>  {
                this.handleDispatch(actionType, {}, dispatch, Status.ERROR);
            })
        }
    }

     // 同步请求
     static promiseRequest(request, responseType) {
        return fetch(request).then((response) => 
            response.json()
        )
    }

    /***************************API  接口 ************************/

    // let request = RequestTool.seriesRequest('GET', '', obj)
    // return this.handleDispatch(request)

    /****************************** login *****************************/
    static Product(type, obj) {
        let request;
        switch(type) {
            case 'Login' : // 普通用户登录
                request = RequestTool.seriesRequest('POST', '/auth/Login', obj)
                return this.promiseRequest(request)
                break;
            case 'BrandList': // 品牌列表
                request = RequestTool.seriesRequest('POST', '/brandInfoEntity/v1/getAllBrand', obj)
                return this.promiseRequest(request)
            case 'BrandSave': // 品牌保存
                request = RequestTool.seriesRequest('POST', '/brandInfoEntity/v1/brandSaveOrUpdate', obj)
                return this.promiseRequest(request)
            case 'CatelogaryList': // 获取分类
                request = RequestTool.seriesRequest('POST', '/productInfoEntity/v1/getAllBrandProductInfo', obj)
                return this.promiseRequest(request)
            case 'CategorySave': // 添加修改分类
                request = RequestTool.seriesRequest('POST', '/productInfoEntity/v1/productSaveOrUpdate', obj)
                return this.promiseRequest(request)
            case 'ProductSave': // 添加修改产品
                request = RequestTool.seriesRequest('POST', '/productModelEntity/v1/productModelSaveOrUpdate', obj)
                return this.promiseRequest(request)
            case 'ProductList': // 产品列表
                request = RequestTool.seriesRequest('POST', '/productModelEntity/v1/getAllProductModelInfo', obj)
                return this.promiseRequest(request)
        }

        
    }
    /****************************** selfpage *****************************/
    static My(type, obj) {
        let request;
        switch(type) {
            case 'RechargeRecord': // 充值记录
                request = RequestTool.seriesRequest('POST', '/my/recharges', obj)
                 return this.handleRequest(request)
        }
    }
}