
import toast from 'react-hot-toast';

export const getMedia = (url) => {
    if (url)
        return `https://twitter.bitcode.az/storage/${url}`
    return null
}

export const notification = (msg, type = 'success', options = {}) => {
    toast[type](msg, {
        position: 'top-right',
        duration: 4000,
        ...options
    });
}