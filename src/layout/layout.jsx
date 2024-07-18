import { HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    const { darkMode, setDarkMode } = useThemeContext()
    return (
        <>
            <header className=" sm:rounded-md  flex  flex-row items-center justify-between sm:my-4 text-md sm:text-lg bg-blue-900 ">
                <Link><h2 className="font-bold sm:text-2xl p-5 capitalize"> <img className="w-8 h-8 inline" src="/favicon-bitcoin-120.png" alt="bitcoin" /> crypto cap</h2></Link>
                <div className="sm:py-7 px-5 flex-wrap">
                    <button className="w-16 px-5 py-2" onClick={() => setDarkMode(!darkMode)} >
                        {darkMode ? <MoonIcon className="w-6 h-6 rounded-full " /> : <SunIcon className="w-6 h-6 rounded-full text-yellow-500 " />}
                    </button>
                </div>
            </header>
            <section className="rounded-md  dark:*:bg-slate-800/10 border-transparent sm:dark:border dark:border-slate-600 mt-5 w-full">
                {children}
            </section>
            <footer className=" bottom-0 bg-blue-950  normal-case flex flex-col rounded-md mt-3 py-5">
                <div>
                    <div className="p-5 mx-6 flex flex-row justify-start gap-20">
                        <ul className="*:mb-1 ">
                            <li className="font-bold pb-2 capitalize">support</li>
                            <li>help Center</li>
                            <li>contact us</li>
                            <li>api status</li>
                            <li>documentation</li>
                        </ul>
                        <ul className="*:mb-1 ">
                            <li className="font-bold pb-2 capitalize">info</li>
                            <li>about us</li>
                            <li>career</li>
                            <li>invest</li>
                            <li>legal</li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="px-5 py-2 text-center capitalize">
                    <p>created with <HeartIcon className="h-5 w-5 inline-block text-red-600 drop-shadow shadow-red-200 animate-bounce " /> by <Link className="underline underline-offset-2 hover:text-rose-300 hover:animate-pulse" to={'https://github.com/hamidfard-source/'}>HamidReza</Link> </p>
                </div>
            </footer>
        </>
    );
}

export default Layout;
