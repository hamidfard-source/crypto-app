import { useRef, useState, Suspense } from "react";
import { useGlobalContext } from "../context/globalContext";
import { searchApi } from "../services/cryptoApi";
import { useOutsideModal } from "../hooks/outsideHook";
import Loading from "./loading";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


const Search = () => {
    const [query, setQuery] = useState('');
    const { currency, setCurrency } = useGlobalContext()
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [searchRes, setSearchRes] = useState('')

    const modalRef = useRef()
    useOutsideModal(modalRef, setIsBoxOpen, setSearchRes)

    function searchHandler(e) {
        e.preventDefault()
        if (query === '') return;
        setSearchRes('')
        searchApi(query).then(res => res.json()).then(res => setSearchRes(res))
        setIsBoxOpen(true);
        console.log(searchRes);
    }

    return (
        <>
            <section className="flex flex-row items-center justify-between mx-2 my-5 sm:mx-5 md:justify-start ">
                <select className="px-1 py-2 mr-3 font-medium rounded-lg cursor-pointer sm:p-3 sm:px-5 dark:bg-blue-800/70 dark:text-slate-300" onChange={(e) => setCurrency(e.target.value)} name="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="btc">BTC</option>
                </select>
                <form className="inline-block sm:mx-5" onSubmit={searchHandler}>
                    <input
                        className={`h-10 dark:focus:bg-slate-800 transition-all ease-in-out duration-500 focus:w-32 md:focus:w-52 ${query !== '' ? 'sm:w-60' : 'sm:w-[130px]'} text-sm sm:text-md sm:h-12 w-[100px]  dark:bg-slate-800 rounded-lg px-3 placeholder:text-slate-500`}
                        onFocus={(e) => e.target.name} onChange={(e) => setQuery(e.target.value)} defaultValue={query} placeholder="Search ..." type="text" name="search" id="search"
                    />

                    <button
                        type="submit"
                        onClick={searchHandler}
                        className="relative p-2 mx-2 font-medium capitalize rounded-md bg-blue-900/80 text-slate-100 hover:bg-blue-800/90 hover:text-slate-100 dark:text-slate-300 dark:hover:bg-blue-600/70 sm:p-3"
                    >
                        submit
                    </button>
                </form>

                {/* <div className="absolute top-0 left-0 z-30 w-full h-full overflow-hidden bg-black "></div> */}
                <div

                    ref={modalRef}
                    data-open={isBoxOpen}
                    className={`  overflow-y-auto min-h-[50vh] h-[50vh] w-[40vw]  absolute top-48  z-30 rounded-md p-3  data-[open=false]:hidden  data-[open=true]:block
                        transition ease-in-out duration-100 `}>
                    <div className="dark:bg-blue-950 bg-slate-100  w-full  p-4 min-h-[40vh]">
                        {searchRes !== '' ? (

                            <div className="overflow-y-auto">
                                {searchRes.coins?.map((i) =>
                                    <Link to={'/coins/' + i.id} key={i.id} className={'hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer'}>
                                        <div className="p-2">
                                            <img className="inline mr-3" src={i.thumb} alt="search" />
                                            <p className="inline font-medium">{i.name} <span className="font-normal text-gray-400 dark:text-gray-500">{i.symbol}</span></p>
                                        </div>
                                    </Link>
                                )}
                            </div>

                        ) : (
                            <div className="h-[30vh] m-auto p-4 grid place-content-center">
                                <Loading size={4} />
                            </div>
                        )}
                    </div>
                </div>

            </section>
        </>
    );
}

export default Search;
