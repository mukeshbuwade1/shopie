import axios from "axios";
import httpConfig from "../constants/httpConfig";

const headerData = (t, isFormData) => {
    let headers = {
        'Accept': '*/*',
        'Content-Type': isFormData ? 'multipart/form-data;' : "application/json"
    }
    if (t)
        headers['Authorization'] = 'Bearer ' + t;
    return { headers }
}

export default {
    // default

    apiRequest: async (method, endPoint, data, token, isFormData) => {
        let url = httpConfig.baseUrl + endPoint;
        let headers = headerData(token)
        d = { ...data, "entry_mode": "mobile-0.0.1" }
        console.log("method", method)
        console.log("url", url)
        console.log("data", data)
        console.log("headers", headers)

        axios({
            method: method,
            url: url,
            data: d,
            headers: headers
        }).then((res) => {
            console.log(res)
        })
            .catch((e) => console.log(e))
    },


    getData: async (endPoint, token) => {
        let url = httpConfig.baseUrl + endPoint
        let headers = headerData(token)
        console.log(url)
        try {
            let res = await axios.get(url, headers);
            console.log(res)

        } catch (error) {
            console.log(error)

        }
    },
    // {email: "admin@gmail.com", password: "12345678", entry_mode: "web-0.0.1"}
    postData: async (endPoint, data, token) => {
        let url = httpConfig.baseUrl + endPoint
        let headers = headerData(token)
        data = { ...data, entry_mode: "web-0.0.1" }
        console.log("url", url)
        console.log("data", data)
        console.log("headers", headers)
        try {
            let res = await axios.post(url,JSON.stringify(data), headers);
            return res
        } catch (error) {
            console.log("error in catch", error)
            return { errMsg: "Something went wrong" }
        }
    }
}