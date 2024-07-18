import { useEffect, useState } from "react";
import { Link, useFetcher, useParams, useSearchParams } from "react-router-dom";

import { getCoinDetial, lineChart } from "../services/cryptoApi";

import Layout from "../layout/layout";
import LineChartCOMP from "../components/lineChart";
import Loading from "../components/loading";

const CoinPage = () => {
    const [err, setErr] = useState()
    const { id } = useParams()
    const [detail, setDetail] = useState();
    const [chartDetail, setChartDetail] = useState()
    const [days, setDays] = useSearchParams({ days: '24h' })
    const [spinner, setSpinner] = useState(true)
    const queryDay = days.get('days')
    const daysNum = {
        '24h': 1,
        '7d': 7,
        '1m': 30,
        '3m': 90,
        '1y': 365,
    };
    // console.table(chartDetail);

    useEffect(() => {
        getCoinDetial(id).then(res => res.json()).then(res => setDetail(res))
    }, [])

    // console.log(detail)

    useEffect(() => {
        setSpinner(true)
        let selectedDay = daysNum[queryDay]
        lineChart(id, selectedDay).then(res => res.json()).then(res => { setChartDetail(res.prices); setSpinner(false) }).catch(err => setErr(err))
    }, [days])

    // console.error('error:', err)

    err && <div>{err}</div>

    return (
        <Layout>
            <div className="flex flex-col md:flex-row flex-1">
                <div className="flex md:flex-row  font-medium tabular-nums">
                    {/* left section */}
                    <div className=" p-4">
                        <div className="mb-2">
                            <Link className="" to={'/'}>Cryptocurrencies</Link> <span className="text-slate-500">&gt;</span> <span className="text-slate-500 capitalize">{id} Price</span>
                        </div>
                        <div className="my-2">
                            <div>
                                <img className="inline-block mr-2" src={detail?.image.thumb} alt={detail?.name} />
                                <span className="text-slate-700 dark:text-slate-300">{detail?.name}</span>
                                <span className="mx-2 text-slate-700 font-light text-sm dark:text-slate-300"><span className="uppercase">{detail?.symbol}</span> Price</span>
                                <span className="bg-slate-300 dark:bg-slate-700 p-1 rounded-md text-xs font-light tracking-tighter"># <span className="font-normal">{detail?.market_cap_rank}</span></span>
                            </div>
                        </div>
                        <h1 className="text-4xl before:content-['$'] before:font-medium font-semibold inline mr-2"> {detail?.market_data.current_price.usd.toLocaleString()}</h1>
                        <span className={`${detail?.market_data.price_change_percentage_24h > 0 ? 'text-emerald-400' : 'text-rose-400'} after:content-['%']`} >{Math.abs(detail?.market_data.price_change_percentage_24h.toFixed(1))}</span>
                        <div className="border-2 border-slate-400 dark:border-slate-700 my-2 rounded-md p-1 px-2 cursor-pointer hover:bg-slate-300"> <Star /> Add to Portfolio</div>
                        <hr />
                        <div className="divide-y divide-slate-200 dark:divide-slate-800 text-sm  *:my-2">
                            <div className="flex flex-row justify-between *:my-2">
                                <div>Market cap</div>
                                <div>{detail?.market_data?.market_cap.usd?.toLocaleString()}</div>
                            </div>
                            <div className="flex flex-row justify-between *:my-2">
                                <div>Fully Diluted Valuation</div>
                                <div>{detail?.market_data?.fully_diluted_valuation.usd?.toLocaleString()}</div>
                            </div>
                            <div className="flex flex-row justify-between *:my-2">
                                <div>24 Hour Trading Vol</div>
                                <div>{detail?.market_data?.market_cap_change_24h?.toLocaleString()}</div>
                            </div>
                            <div className="flex flex-row justify-between *:my-2">
                                <div>Circulating Supply</div>
                                <div>{detail?.market_data?.circulating_supply?.toLocaleString()}</div>
                            </div>
                            <div className="flex flex-row justify-between *:my-2">
                                <div>Total Supply</div>
                                <div>{detail?.market_data?.total_supply?.toLocaleString()}</div>
                            </div>
                            <div className="flex flex-row justify-between *:my-2">
                                <div>Max Supply</div>
                                <div>{detail?.market_data?.max_supply?.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="*:bg-emerald-400 dark:*:bg-emerald-900  dark:*:shadow-emerald-900  disabled:bg-slate-500/50  *:rounded-lg *:px-5 *:py-2 my-3 flex flex-row justify-center gap-3 text-xs dark:text-emerald-200/70 ">
                            <button className="disabled:hover:opacity-70 disabled:cursor-not-allowed" disabled>buy/sell</button>
                            <button className="disabled:hover:opacity-70 disabled:cursor-not-allowed" disabled>wallet</button>
                            <button className="disabled:hover:opacity-70 disabled:cursor-not-allowed" disabled>Earn Crypto</button>
                        </div>


                    </div>
                </div>
                {/* chart Section */}
                <div className="flex-auto md:border-l border-l-slate-50/10 ml-4  pl-10">
                    <div className="flex flex-row">

                        <ul className="flex flex-row *:p-2 *:cursor-pointer *:mx-1 mx-auto *:rounded-md *:min-w-11 *:my-3 *:text-center">
                            <li className={`${queryDay === '24h' ? 'bg-slate-200 dark:bg-slate-700' : ''}`} onClick={() => setDays({ days: '24h' })}>24h</li>
                            <li className={`${queryDay === '7d' ? 'bg-slate-200 dark:bg-slate-700' : ''}`} onClick={() => setDays({ days: '7d' })}>7d</li>
                            <li className={`${queryDay === '1m' ? 'bg-slate-200 dark:bg-slate-700' : ''}`} onClick={() => setDays({ days: '1m' })}>1m</li>
                            <li className={`${queryDay === '3m' ? 'bg-slate-200 dark:bg-slate-700' : ''}`} onClick={() => setDays({ days: '3m' })}>3m</li>
                            <li className={`${queryDay === '1y' ? 'bg-slate-200 dark:bg-slate-700' : ''}`} onClick={() => setDays({ days: '1y' })}>1y</li>
                        </ul>
                    </div>
                    <div className="flex justify-center ">
                        {!spinner ?
                            <LineChartCOMP
                                data={chartDetail}
                                color={`${detail?.market_data.price_change_percentage_24h > 0 ? "#10B981" : "#F43E5E"}`} />
                            : (<div className="min-h-max flex justify-center items-center"><Loading size={5} /></div >)
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CoinPage;

const Star = () => {
    return (
        <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16" />
        </svg>
    )

}