import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import SearchItems from "../components/searchItems";
import CoinPage from "../pages/coinPage";

const History = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<App />} />
                <Route path="/coins/:id"  element={<CoinPage />} />
                <Route path="/search" element={<SearchItems />} />
            </Routes>
        </BrowserRouter>
    );
}

export default History;
