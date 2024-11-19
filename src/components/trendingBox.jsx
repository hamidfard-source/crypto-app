import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

const TrendingBox = () => {
    const { trending } = useGlobalContext()
    const [active, setActive] = useState(1)
    const slide1 = trending.slice(0, 5)
    const slide2 = trending.slice(5, 10)
    const slide3 = trending.slice(-5)

    useEffect(() => {
        if (active === 4) return setActive(1);
        const timer = setInterval(() => {
            setActive(active + 1)
        }, 5000);
        return () => clearInterval(timer)
    }, [active])
    return (
        <section className="relative w-full h-full mb-5 text-sm rounded-lg bg-slate-200 dark:bg-slate-800" >
            <div className="overflow-hidden rounded-lg ">

                <div className={`transition-transform ease-in-out duration-700  m-5 z-10 ${active === 1 ? ' translate-x-0 ' : 'translate-x-full'}`}>
                    {active == 1 && slide1.map((i) => (
                        <Link to={`/coins/${i.item.id}`}>
                            <div className={`p-1 px-2 flex flex-row justify-between text-center align-middle gap-2`} key={i.item.coin_id}>
                                <img className="inline w-5 h-5" src={i.item.small} alt={i.item.small} />
                                <p className="inline font-semibold">{i.item.name}</p>
                                <span className="dark:text-gray-500 ">{i.item.symbol}</span>
                                <span className="font-light text-slate-700 dark:text-slate-400">{i.item.data.price_change_percentage_24h.btc.toFixed(3)}</span>
                                <img className="inline h-8 sm:hidden xl:inline" src={i.item.data.sparkline} alt={i.item.data.sparkline} />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={` transition-transform ease-in-out duration-700 m-5 z-10 ${active == 2 ? ' translate-x-0 ' : 'translate-x-full'}`}>
                    {active == 2 && slide2.map((i) => (
                        <Link to={`/coins/${i.item.id}`}>
                            <div className={`p-1 px-2 flex flex-row justify-between text-center align-middle gap-2`} key={i.item.coin_id}>
                                <img className="inline w-5 h-5" src={i.item.small} alt={i.item.small} />
                                <p className="inline font-semibold">{i.item.name}</p>
                                <span className="font-light text-slate-700 dark:text-slate-400">{i.item.data.price_change_percentage_24h.btc.toFixed(3)}</span>
                                <span className="dark:text-gray-500" >{i.item.symbol}</span>
                                <img className="inline h-8 sm:hidden xl:inline" src={i.item.data.sparkline} alt={i.item.data.sparkline} />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={` transition-transform ease-in-out duration-700 m-5 z-10 ${active == 3 ? ' translate-x-0 ' : 'translate-x-full'}`}>
                    {active == 3 && slide3.map((i) => (
                        <Link to={`/coins/${i.item.id}`}>
                        <div className={`p-1 px-2 flex flex-row justify-between text-center align-middle gap-2`} key={i.item.coin_id}>
                            <img className="inline w-5 h-5" src={i.item.small} alt={i.item.small} />
                            <p className="inline font-semibold">{i.item.name}</p>
                            <span className="dark:text-gray-500 ">{i.item.symbol}</span>
                            <span className="font-light text-slate-700 dark:text-slate-400">{i.item.data.price_change_percentage_24h.btc.toFixed(3)}</span>
                            <img className="inline h-8 sm:hidden xl:inline" src={i.item.data.sparkline} alt={i.item.data.sparkline} />
                        </div>
                        </Link>
                    ))}
                </div>

            </div>
            <section className="absolute flex flex-row justify-center w-full gap-2 -bottom-3 ">
                <div className={`border-2 h-2 w-2 rounded-full border-slate-400 dark:border-slate-200  inline cursor-pointer ${active == 1 && 'bg-slate-500 dark:bg-slate-100'}`} onClick={() => setActive(1)}></div>
                <div className={`border-2 h-2 w-2 rounded-full border-slate-400 dark:border-slate-200  inline cursor-pointer ${active == 2 && 'bg-slate-500 dark:bg-slate-100'}`} onClick={() => setActive(2)}></div>
                <div className={`border-2 h-2 w-2 rounded-full border-slate-400 dark:border-slate-200  inline cursor-pointer ${active == 3 && 'bg-slate-500 dark:bg-slate-100'}`} onClick={() => setActive(3)}></div>
            </section>
        </section>

    );
}



export default TrendingBox;
