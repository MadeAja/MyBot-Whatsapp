const fetch = require('node-fetch')
const { fromBuffer } = require('file-type')
const fs = require('fs-extra')
const FormData = require('form-data')

/**
 * Fetch JSON from URL.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<object>} 
 */
const fetchJson = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((err) => reject(err))
    })
}

/**
 * Fetch text from URL.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<string>}
 */
const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.text())
            .then((text) => resolve(text))
            .catch((err) => reject(err))
    })
}

/**
 * Get buffer from direct media.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<Buffer>}
 */
const fetchBuffer = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.buffer())
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

/**
 * Upload images to telegra.ph server.
 * @param {Buffer} buffData 
 * @param {string} fileName
 * @returns {Promise<string>}
 */
 const uploadImages = async (buffer) => {
    const { ext } = await fromBuffer(buffer) || {}
    let form = new FormData
    form.append('file', buffer, 'tmp' + ext)
    let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
      method: 'POST',
      body: form
    })
    let json = await res.json()
    if (!json.success) throw json
    return json.link
  }


module.exports = {
    fetchJson,
    fetchText,
    fetchBuffer,
    uploadImages
}