import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <div className="Navbar">  
      <div className="Navbar_container">
        <ul >
          <li> <NavLink to = "/"> Songs </NavLink> </li>
          <li> <NavLink to = "/artists"> Artists </NavLink> </li>
          <li> <NavLink to = "/albums"> Albums </NavLink> </li>
          <li> <NavLink to = "/Playlists"> Playlists </NavLink> </li>
          <li> <NavLink to = "/SearchPage"> Search </NavLink> </li>
        </ul>
      </div>
      </div>
    </>
  )
};

export default Navbar;