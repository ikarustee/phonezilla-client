import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
      <nav>
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/posts/">News</NavLink></li>
          </ul>
      </nav>
  );
};

export default Navbar;
