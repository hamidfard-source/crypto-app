const BASE_URL = 'https://api.coingecko.com/api/v3';

const header = {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-JfRYq4bK3nsysFdaCkWcMoGU'
}

const getCoins = (page, currency) => {
    return fetch(`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_capa_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-JfRYq4bK3nsysFdaCkWcMoGU`, {
        method: 'GET',
        headers: { header }
    })
}

const getTrending = () => {
    return fetch(`${BASE_URL}/${import.meta.env.VITE_TRENDING_URL}?${import.meta.env.VITE_TOKEN}`, {
        method: 'GET',
        headers: { header }
    })
}

const searchApi = (query) => {
    return fetch(`${BASE_URL}/search?query=${query}&${import.meta.env.VITE_TOKEN}`)
}

const getCoinDetial = (coinID) => {
    return fetch(`${BASE_URL}/coins/${coinID}?${import.meta.env.VITE_TOKEN}`, { method: 'GET', headers: { header } })
}

const lineChart = (coinId, daysIndex) => {
   console.log('daysIndex', daysIndex);
    return fetch(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&precision=2&days=${daysIndex}&${import.meta.env.VITE_TOKEN}`, { method: 'GET', headers: { header } })
}

export { getCoins, getTrending, searchApi, getCoinDetial, lineChart };