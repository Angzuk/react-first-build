import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Layout(props) {
    // Properties ---------------------------------------------------
    // Hooks --------------------------------------------------------
    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    // View ---------------------------------------------------------
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;