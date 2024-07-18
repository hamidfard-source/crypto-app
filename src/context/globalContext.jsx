import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTrending } from '../services/cryptoApi';
import { useSearchParams } from 'react-router-dom';

const GlobalContext = createContext()
const GlobalContextProvider = ({ children }) => {
    // const location = useLocation()
    // const [pageParams, setPageParams] = useSearchParams()
    const [coins, setCoins] = useState([])
    const [trending, setTrending] = useState([])
    const [currency, setCurrency] = useState("usd")
    const [page, setPage] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/coins/markets?vs_currency=${currency}&per_page=10&page=${page}${import.meta.env.VITE_COIN_URL}&${import.meta.env.VITE_TOKEN}`).then(res => res.json())
            .then(res => setCoins(res))
    }, [currency, page])

    useEffect(() => {
        getTrending().then(res => res.json()).then(res => setTrending(res.coins))
    }, [])


    return (
        <GlobalContext.Provider value={{ coins, trending, currency, setCurrency, page, setPage }}>
            {children}
        </GlobalContext.Provider>
    );
}


export const useGlobalContext = () => {
    return useContext(GlobalContext)
};

export default GlobalContextProvider