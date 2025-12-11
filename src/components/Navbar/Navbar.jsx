import x from '../../assets/images/favicon.png'
import { NavLink } from 'react-router-dom';
import { useState } from "react";


export default function Navbar() {

    const [open ,setOpen] =useState(false);

    function openCloseNav(){
        setOpen(!open) 
    }


    return <>
        {/* SIDE_NAV */}
            <div className={`nav-side z-3 position-fixed top-0 vh-100 w-250 ${open ? 'opened' : ''}`} >
                <div className="container  d-flex flex-column justify-content-between h-100 ps-4  pb-3 pe-5">
                    <div className="links overflow-hidden pe-5 pt-5">
                        <ul className="list-unstyled fs-5 link d-flex flex-column gap-4">
                            <li><span className="hover-red d-home"><NavLink to="/" className="text-decoration-none">Home</NavLink></span></li>
                            <li><span className="hover-red d-search"><NavLink to="/search" className="text-decoration-none">Search</NavLink></span></li>
                            <li><span className="hover-red d-Cat"><NavLink to="/categories" className="text-decoration-none">Categories</NavLink></span></li>
                            <li><span className="hover-red d-area"><NavLink to="/area" className="text-decoration-none">Area</NavLink></span></li>
                            <li><span className="hover-red d-ingrad"><NavLink to="/ingrediants" className="text-decoration-none">Ingredients</NavLink></span></li>
                            <li><span className=""><NavLink to="/contact" className="text-decoration-none">Contact Us</NavLink></span></li>
                        </ul>
                    </div>
                    <div className="footer pb-3">
                        <ul className="mb-2 d-flex gap-2 list-unstyled">
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-firefox-browser"></i></li>
                        </ul>
                        <p className="m-0 copy w-75">Copyright © 2022 All Rights Reserved. </p>
                        <a target="_blank" href="https://github.com/Ziad-AboElenien" className="undedline fs-5">Ziad
                            Elsayed</a>
                    </div>
                </div>
            </div>
         {/* MAIN NAV  */}
            <nav className={`position-fixed z-3 top-0 start-0 vh-100 text-center ${open ? 'opened' : ''}`}>
                <div className="d-flex flex-column justify-content-between h-100 pt-4 pb-5">
                    <NavLink to="/" className="nav-logo">
                        <img src={x} className="img-fluid w-50" alt="" />
                    </NavLink>
                    <div onClick={openCloseNav} className="nav-menu-box">
                         {!open && <i className="fa-solid fs-5 menu-btn fa-bars"></i>}
                        {open && <i className="fa-solid fs-5 exit-btn fa-xmark"></i>}
                    </div>
                    <div className="nav-social d-flex flex-column gap-2 w-fit mx-auto">
                        <i className="fa-solid fa-globe"></i>
                        <i className="fa-solid fa-share-nodes"></i>
                    </div>
                </div>
            </nav>
    </>
}