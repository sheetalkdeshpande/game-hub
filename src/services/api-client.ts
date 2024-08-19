import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6470a6d040e34a1883bf321812e99bc8'
    }
})