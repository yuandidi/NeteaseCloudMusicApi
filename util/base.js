function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line no-useless-escape
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getQueryFromUrl(key, search) {
    try {
        const sArr = search.split('?');
        let s = '';
        if (sArr.length > 1) {
            s = sArr[1];
        } else {
            return key ? undefined : {};
        }
        const querys = s.split('&');
        const result = {};
        querys.forEach((item) => {
            const temp = item.split('=');
            result[temp[0]] = decodeURIComponent(temp[1]);
        });
        return key ? result[key] : result;
    } catch (err) {
        // 除去search为空等异常
        return key ? '' : {};
    }
}

function changeUrlQuery(obj, baseUrl) {
    const query = getQueryFromUrl(null, baseUrl);
    let url = baseUrl.split('?')[0];

    const newQuery = { ...query, ...obj };
    let queryArr = [];
    Object.keys(newQuery).forEach((key) => {
        if (newQuery[key] !== undefined && newQuery[key] !== '') {
            queryArr.push(`${key}=${encodeURIComponent(newQuery[key])}`);
        }
    });
    return `${url}?${queryArr.join('&')}`.replace(/\?$/, '');
}
const { default: axios } = require('axios')
module.exports = {getParameterByName,changeUrlQuery,axios}