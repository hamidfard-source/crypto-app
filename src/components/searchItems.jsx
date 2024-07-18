import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { searchApi } from "../services/cryptoApi";
import Layout from "../layout/layout";

const SearchItems = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState()

    useEffect(() => {
        searchApi(searchParams.get("query"))
            .then(res => res.json())
            .then(res => setData(res.coins))
            .catch(err => console.error(err))
    }, [])

    console.log(data);
    return (
        <Layout>
            <div>
                <p>coins</p>
                <p>Search: {searchParams.get('query')}</p>
                <ul>
                    {
                        data?.map((i) => (
                            <li key={i.id}>
                                
                                <div className="*:mx-2">
                                    <img src={i.thumb} alt="i.id" className="inline-block"/>
                                    <p className="inline font-medium">{i.name}</p>
                                    <span className="text-gray-500 font-medium">{i.symbol}</span>
                                </div>
                                
                               
                            </li>
                        ))
                    }

                </ul>

            </div>
        </Layout>
    );
}

export default SearchItems;
