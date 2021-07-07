import React from 'react';
import { NavLink } from 'react-router-dom'
function Menu() {
    return (
        <>
            <div className="Active">
                <NavLink className="active" exact activeClassName="active_class" to="/">Home</NavLink>
                <NavLink className="active" exact activeClassName="active_class" to="/about">About</NavLink>
                <NavLink className="active" exact activeClassName="active_class" to="/services">Services</NavLink>
                <NavLink className="active" exact activeClassName="active_class" to="/contact">Contact-Us</NavLink>
            </div>
        </>
    );
}
export default Menu;