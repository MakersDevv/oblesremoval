import NavBar from "./navigationBar";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}