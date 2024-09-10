import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

    return (
      <div className="flex items-center justify-between bg-stone-800 uppercase text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base">
        <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
          <span>{totalCartQuantity} Pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>  
      </div>
    );
  }
  
  export default CartOverview;