import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {Menu} from "antd"
import { PostContext } from '../Contexts/PostContext';


const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const handleClick = (e) => {
    setCurrentPage({ current: e.key });
  }

  return (
    <nav>
      <div className="nav">
        <Menu theme="default" mode="horizontal" defaultSelectedKeys={['0']} breakpoint="md" trigger={null}>
            <Menu.Item key="home" onClick={handleClick}><NavLink to="/">Home</NavLink></Menu.Item>
            <Menu.Item key="posts"><NavLink to="/posts/">Posts</NavLink></Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

    //   <nav>
    //       <ul>
    //           <li><NavLink to="/">Home</NavLink></li>
    //           <li><NavLink to="/posts/">News</NavLink></li>
    //       </ul>
    //   </nav>