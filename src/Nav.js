import React, { useEffect, useState } from 'react'
import './Nav.css';;
function Nav(){
    const[show,handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) { 
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
           window.removeEventListener("scroll");
        };
    },[]);
    return(
        <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
        //src="https://i.pinimg.com/originals/4a/5c/7d/4a5c7dc0c88598093e5449b392a1b4b5.png"
        src=" https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"/>
        <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
        
        />
        
        </div>
    )
}

export default Nav;