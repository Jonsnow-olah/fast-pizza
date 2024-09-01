import { Link } from "react-router-dom/dist";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
    return (
        <header className="flex items-center justify-between bg-yellow-500 px-4 py-3 uppercase border-b border-stone-200 sm:px-6">
            <Link to="/" className="tracking-widest">Fast Pizza</Link>

            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header
