class Xfetch {
    constructor(baseUrl, configs) {
        this.baseUrl = baseUrl
        this.configs = configs
    }
    async post(api, params) {
        let url = this.baseUrl + api
        let data = JSON.stringify(params)
        console.log(data)
        return fetch(url, {
            body: data,
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
        }).then(respose => respose.json())
    }
    async get(api, params) {
        let url = this.baseUrl + api
        if (params) {
            let paramsArray = [];
            //拼接参数  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return fetch(url, {
            method: "GET"
        })
    }
}
const baseUrl = 'http://10.255.206.190:10086/api/'
export default service = new Xfetch(baseUrl)