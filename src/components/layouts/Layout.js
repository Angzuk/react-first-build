import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./Layout.css";


function Layout(props) {
    // Properties ---------------------------------------------------
    // Hooks --------------------------------------------------------
    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    // View ---------------------------------------------------------
    return (
        <div className="centrepane">
            <Header />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;