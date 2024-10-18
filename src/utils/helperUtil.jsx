
import toast from 'react-hot-toast';

export const getMedia = (url) => {
    return `https://twitter.bitcode.az/storage/${url}` 
}

export const notification = (msg, type, options = {}) => {
    toast[type](msg, {
        position: 'top-right',
        duration: 4000,
        ...options
    });
}