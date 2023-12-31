import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    const activeStyle = {
        color : 'green',
        fontSize : "21px",
    }
    return (
        <div>
            <Outlet/>
            <ul style={{display : 'flex', listStyleType:'none'}}>
                <li style={{padding: '10px 20px'}}>
                    <NavLink to="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글1 </NavLink>
                </li>
                <li style={{padding: '10px 20px'}}>
                    <NavLink to="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글2 </NavLink>
                </li>
                <li style={{padding: '10px 20px'}}>
                    <NavLink to="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글3 </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Articles;