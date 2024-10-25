import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    // Properties ---------------------------------------------------
    // Hooks --------------------------------------------------------
    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    // View ---------------------------------------------------------
    return (
        <header>
            <NavLink>
                <img src="https://img.icons8.com/ios-filled/50/000000/conference-call.png" alt="Icon showing group"/>
            </NavLink>
            <a>
                <h1>React First Build</h1>
            </a>
            <div class="login">
                <p>Welcome Graeme!</p>
            </div>
        </header>  
    )
}

export default Header;