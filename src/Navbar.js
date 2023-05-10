import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blogs</h1>
            <div className="links">
                <a href="/"> HomePage </a>
                <a href="/create"> New Blog </a>
            </div>
        </nav>
     );
}
 
export default Navbar;