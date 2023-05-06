import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Layout(){
    return(
        <>
            <NavBar />
            <Header />
                <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;