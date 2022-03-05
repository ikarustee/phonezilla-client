import React, {useEffect, useState} from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {Menu} from "antd"
import logo from "../logo.png"


const Navbar = () => {

  const [currentPage, setCurrentPage] = useState("home")
  const [selectedPage, setSelectedPage] = useState()
  
  let location = useLocation();
  let navigate = useNavigate();
  

  const handleClick = (e) => {
    setCurrentPage({ current: e.key });
    setSelectedPage(currentPage)
    navigate(e.key)
  }

  useEffect(() => {
    setSelectedPage(location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[location])

  return (
    <nav>
      <div className="nav">
        <Link to="/"><img src={logo} alt="" width="120"/></Link>
        <Menu theme="default" mode="horizontal" defaultSelectedKeys={location.pathname} trigger={null}>
            <Menu.Item key="/" onClick={handleClick} className="nav__home"><NavLink to="/">Home</NavLink></Menu.Item>
            <Menu.Item key="/posts/"><NavLink to="/posts/">Posts</NavLink></Menu.Item>
            <Menu.Item key="/contact/"><NavLink to="/contact/">Contact</NavLink></Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;