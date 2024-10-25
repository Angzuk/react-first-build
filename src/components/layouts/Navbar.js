import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <nav>
      <div className="navItem">
        <NavLink to='/' >Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/signin' >Sign In</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/contact' >Contact us</NavLink>
      </div>
    </nav>
  )
}
export default Navbar;