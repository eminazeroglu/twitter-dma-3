import CryptoJS from 'crypto-js'

const cryptoKey = '123'

export const enCode = (string) => {
    return CryptoJS.AES.encrypt(string, cryptoKey).toString();
}

export const deCode = (string) => {
    return CryptoJS.AES.decrypt(string, cryptoKey).toString(CryptoJS.enc.Utf8);
}