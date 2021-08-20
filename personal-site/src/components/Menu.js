import React, { useState } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose"
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"

const Menu = () => {

const [menuOpen, setMenuOpen] = useState(false);

const handleMenuClick = () => {
    setMenuOpen(prev => !prev)
}

const closeMenu = () => {
    setMenuOpen(false);
}

    return(
        <div className="menu">
           <nav className="hamburger-menu">
                <button className={`hamburger-menu-button ${menuOpen ? " showMenu" : ""}`}
                onClick={handleMenuClick}>{menuOpen ? 
                (<MdClose style={{color: "#fff", width: "30px", height: "30px"}}/>) 
                : 
                <FiMenu style = {{color: "#7b7b7b", width: "30px", height: "30px"}}/>}
                </button>
                <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
                <a href="http://google.com" target="_blank" onClick={() => closeMenu()}>Test</a>
                </ul>
                
            </nav>
        </div>
    );
};

export default Menu;