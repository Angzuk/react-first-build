import Header from "./Header";
import Footer from "./Footer";


function Layout(props) {
    // Properties ---------------------------------------------------
    // Hooks --------------------------------------------------------
    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    // View ---------------------------------------------------------
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;