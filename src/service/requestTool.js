import { inflate } from "zlib";
import { serverUrl, uploadUrl} from '../store/redux/ActionTypes'

export default class RequestTool {
    // 异步请求
    static seriesRequest (method, path, params, headers) {
        let url = serverUrl + path
        if(headers === undefined) {
            headers = {}
            headers['Content-Type'] = 'application/json;chartset=utf-8'
        }
        if(params === undefined) {
            params = {}
        }
        let request
        if(method === 'GET') {
            let paramsArry = []
            Object.keys(params).forEach((key) => params[key] != undefined && params[key] != null ? paramsArry.push(key + '=' + params[key]) : null)
            url += '?' + paramsArry.join('&')
            request = new Request(url, {
                method: 'GET',
                headers: headers
            })
        } else if(method === 'POST') {
            let bodyStr = JSON.stringify(params)
            request = new Request(url, {
                method: 'POST',
                headers: headers,
                body: bodyStr
            })

        } else if(method === 'PUT') {
            request = new Request(url, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(bodyStr)

            })
        } else if(method === 'DELETE') {
            request = new Request(url, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(bodyStr)
            })
        }

        return request
    }   

   

}