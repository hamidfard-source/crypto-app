import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useGlobalContext } from "./context/globalContext";
import Layout from "./layout/layout";

import Search from "./components/search";
import Loading from "./components/loading";
import SparkLine from "./components/sparkLine";
import Pagination from "./components/pagination";
import TrendingBox from "./components/trendingBox";

function App() {
  const [pageValue, setPageValue] = useSearchParams({page:1});
  const pageindex = pageValue.get('page')
  const [isLoading, setIsLoading] = useState(false);
  const { coins, currency, page, setPage } = useGlobalContext();
  // console.log(coins);

  useEffect(() => setPage(pageValue.get('page')), [page, pageValue])
  return (
    <Layout>
      <Search />
      <section className="dark:bg-slate-950 sm:text-sm w-full flex flex-row" >
        {
          isLoading === true ? <div className="w-full h-screen flex items-center justify-center "><Loading size={'5'} /></div> :
            <table className="border dark:border-transparent text-xs sm:text-sm text-center font-medium relative table-fixed  w-full">
              <thead className="bg-slate-200 text-blue-900/90 dark:text-blue-200/80 dark:bg-slate-800 capitalize h-14 text-xs  sm:text-sm z-20  ">
                <tr className="text-sm *:top-0 *:sticky md:*:sticky *:z-20 dark:*:bg-slate-800 *:bg-slate-200">
                  <th className="px-2 w-2 "></th>
                  <th className="text-start left-0 z-30 ">coin</th>
                  <th className="text-start pl-2">name</th>
                  <th className="text-end">price</th>
                  <th> <span>24h</span> </th>
                  <th className="hidden  md:table-cell md:align-middle md:top-0 md:sticky">volume</th>
                  <th className="sm:text-center ">Chart</th>
                </tr>
              </thead>
              <tbody className="odd:bg-slate-400  divide-y dark:divide-y-2 divide-slate-200 dark:divide-slate-800">
                <>
                  {coins?.map((i) =>
                  (<tr key={i.id} className="">
                    <td className="dark:bg-slate-900 w-2 sticky left-0 z-10"></td>
                    <td className="text-start font-semibold  sm:w-32  min-w-20  dark:bg-slate-900  sticky left-0 z-10">
                      <Link to={`/coins/${i.id}`}>
                        <img className="w-3 h-3 sm:h-7 sm:w-7 inline mx-auto " src={i.image} alt={i.name} />
                        <span className="ml-1 text-xs sm:text-md sm:ml-2">{i.symbol.toUpperCase()}</span>
                      </Link>
                    </td>
                    <td className="text-start min-w-28 sm:w-32 pl-2 "><Link to={`/coins/${i.id}`} >{i.name}</Link></td>
                    <td className="text-end min-w-20 "><span className="proportional-nums">${i.current_price.toLocaleString()}</span></td>
                    <td className={`${i.price_change_percentage_24h > 0 ? 'text-emerald-500' : 'text-rose-500'} min-w-20 `}>{i.price_change_percentage_24h.toFixed(2)} %</td>
                    <td className=" min-w-32 pt-3 hidden md:block">{i.total_volume.toLocaleString()}</td>
                    <td className="text-start ">
                      <SparkLine data={i.sparkline_in_7d} stroke={i.price_change_percentage_24h > 0 ? "#10B981" : "#F43E5E"} fill={i.price_change_percentage_24h > 0 ? "#10b98180" : "#f43e5e80"} />
                    </td>
                  </tr>)
                  )}
                </>
              </tbody>
            </table>}
        <aside className=" h-1/3 hidden lg:block md:w-1/3  sticky bg-slate-400/10 dark:bg-slate-700/50 rounded-md top-0 mx-6 p-1 ">
          <TrendingBox />
        </aside>
        <div className="shimmer"></div>
      </section>
      <Pagination page={parseInt(pageindex)} setPage={setPageValue} />

    </Layout>
  );
}

export default App;
