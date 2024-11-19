import { HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    const { darkMode, setDarkMode } = useThemeContext()
    return (
        <>
            <header className="flex flex-row items-center justify-between bg-blue-900 sm:rounded-md sm:my-4 text-md sm:text-lg">
                <Link to={'/'}><h2 className="p-5 font-bold capitalize sm:text-2xl"> <img className="inline w-8 h-8" src="/favicon-bitcoin-120.png" alt="bitcoin" /> crypto cap</h2></Link>
                <div className="flex-wrap px-5 sm:py-7">
                    <button className="w-16 px-5 py-2" onClick={() => setDarkMode(!darkMode)} >
                        {darkMode ? <MoonIcon className="w-6 h-6 rounded-full " /> : <SunIcon className="w-6 h-6 text-yellow-500 rounded-full " />}
                    </button>
                </div>
            </header>
            <section className="rounded-md  dark:*:bg-slate-800/10 border-transparent sm:dark:border dark:border-slate-600 mt-5 w-full">
                {children}
            </section>
            <footer className="bottom-0 flex flex-col py-5 mt-3 normal-case rounded-md bg-blue-950">
                <div>
                    <div className="flex flex-row justify-start gap-20 p-5 mx-6">
                        <ul className="*:mb-1 ">
                            <li className="pb-2 font-bold capitalize">support</li>
                            <li>help Center</li>
                            <li>contact us</li>
                            <li>api status</li>
                            <li>documentation</li>
                        </ul>
                        <ul className="*:mb-1 ">
                            <li className="pb-2 font-bold capitalize">info</li>
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
                    <p>created with <HeartIcon className="inline-block w-5 h-5 text-red-600 drop-shadow shadow-red-200 animate-bounce " /> by <Link className="underline underline-offset-2 hover:text-rose-300 hover:animate-pulse" to={'https://github.com/hamidfard-source/'}>HamidReza</Link> </p>
                </div>
            </footer>
        </>
    );
}

export default Layout;
