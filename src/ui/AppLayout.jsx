import { Outlet, useNavigation } from "react-router-dom/dist";
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";


    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />

            <divz className="overflow-scroll">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </divz>

            <CartOverview />
        </div>
    )
}

export default AppLayout;
