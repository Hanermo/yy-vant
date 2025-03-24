import axios from 'axios'
import { Toast } from "vant";

const server = axios.create({
    timeout: 15000,
    withCredentials: true,
    changeOrigin: true,
})

// 请求拦截器
server.interceptors.request.use(
    (config) => {
        Toast.loading({
            duration: 0,
            forbidClick: true,
            message: 'loading...'
        })
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
server.interceptors.response.use(
    (response) => {
        const { data } = response
        Toast.clear()
        if(response.status === 200){
            return Promise.resolve(data)
        }else{
            return Promise.reject(data)
        }
    },
    (error) => {
        Toast.clear()
        return Promise.resolve(error.response)
    }
)

export default server;