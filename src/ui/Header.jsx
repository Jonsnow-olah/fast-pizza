import { Link } from "react-router-dom/dist";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link to="/">Fast Pizza</Link>

            <SearchOrder />
        </header>
    );
}

export default Header
