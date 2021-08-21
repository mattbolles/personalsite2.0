import React, { useState } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose"
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"
import { graphql, useStaticQuery } from "gatsby";

const Menu = () => {
const data = useStaticQuery(graphql`
  query MenuDataQuery {
    allMenuJson {
      edges {
        node {
            title
            link
            color
        }
      }
    }
  }
`);

const [menuOpen, setMenuOpen] = useState(false);
const [selectedLink, setSelectedLink] = useState(-1);

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
                <div className = "skills">
                    {data.allMenuJson.edges.map(({ node }, index) => (
                        // appends showMenu to classname if open, appends selected if hovered over
                    <div className = {`menu-link ${menuOpen ? " showMenu" : ""} ${selectedLink === index ? "selected" : ""}`}  
                    
                    key = {index} onMouseEnter={()=> setSelectedLink(index)} onMouseLeave={() => setSelectedLink(-1)}>
                        <h4>
                            
                        {
                            selectedLink === index ?
                            <a href={node.link} style = {{color: node.color}} onClick = {() => closeMenu()}>{node.title}</a>
                            :
                            <a href={node.link} onClick = {() => closeMenu()}>{node.title}</a>

                        }</h4>
                    </div>
                    ))}
                </div>

                </ul>
                
            </nav>
        </div>
    );
};

export default Menu;