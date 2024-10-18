import axios from "axios";
import { API_CONFIG } from "../configs/apiConfig";
import { getStorage } from "../utils/storageUtil";

const createInstance = () => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    if (getStorage('token'))
        headers['Authorization'] = `Bearer ${getStorage('token')}`

    const instance = axios.create({
        baseURL: API_CONFIG.baseURL,
        timeout: 1000,
        headers
    });

    return instance;
}

export const apiPost = (url, data, config = {}) => {
    try {
        return createInstance().post(url, data, config)
    }
    catch(e) {
        return e;
    }
}

export const apiPostFormData = (url, data, config = {}) => {
    try {
        return createInstance().post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    catch(e) {
        return e;
    }
}

export const apiGet = (url, config = {}) => createInstance().get(url, config)