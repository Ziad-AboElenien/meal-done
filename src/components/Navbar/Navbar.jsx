import x from '../../assets/images/favicon.png'
import { NavLink } from 'react-router-dom';
import { useState } from "react";


export default function Navbar() {

    const [open, setOpen] = useState(false);

    function openCloseNav() {
        setOpen(!open);
    }

    function closeNav() {
        setOpen(false);
    }

    return <>
        {/* Overlay for mobile */}
        {open && <div className="nav-overlay" onClick={closeNav}></div>}

        {/* SIDE NAV */}
        <div className={`nav-side position-fixed top-0 vh-100 ${open ? 'opened' : ''}`}>
            <div className="nav-side-content d-flex flex-column justify-content-between h-100 p-4">
                <div className="nav-brand mb-5">
                    <NavLink to="/" onClick={closeNav} className="d-flex align-items-center gap-3 text-decoration-none">
                        <img src={x} className="nav-brand-logo" alt="Logo" />
                        <span className="nav-brand-text">Meal Done</span>
                    </NavLink>
                </div>

                <div className="nav-links flex-grow-1">
                    <ul className="list-unstyled d-flex flex-column gap-2">
                        <li>
                            <NavLink to="/" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-house"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Search</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-list"></i>
                                <span>Categories</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/area" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-earth-americas"></i>
                                <span>Area</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ingrediants" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-pepper-hot"></i>
                                <span>Ingredients</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeNav} className="nav-link-item">
                                <i className="fa-solid fa-envelope"></i>
                                <span>Contact Us</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav-footer">
                    <div className="nav-social-links mb-3">
                        <a target='_blank' href="https://www.facebook.com/zezo.aboelenan" className="nav-social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a target='_blank' href="https://www.linkedin.com/in/ziad-elsayed-399aa62aa/" className="nav-social-icon"><i className="fa-brands fa-linkedin"></i></a>
                        <a target='_blank' href="https://www.instagram.com/ziad_3lsayed/" className="nav-social-icon"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <p className="nav-copyright">© 2024 Meal Done</p>
                    <a href="https://github.com/Ziad-AboElenien" target="_blank" className="nav-creator">by Ziad Elsayed</a>
                </div>
            </div>
        </div>

        {/* BURGER BUTTON (visible on mobile) */}
        <button
            type="button"
            onClick={openCloseNav}
            className={`nav-burger ${open ? 'opened' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
        >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
        </button>

        {/* DESKTOP NAV RAIL (hidden on mobile) */}
        <nav className="nav-rail position-fixed top-0 start-0 vh-100">
            <div className="d-flex flex-column justify-content-between h-100 py-4">
                <NavLink to="/" className="nav-rail-logo">
                    <img src={x} className="img-fluid" alt="Logo" />
                </NavLink>

                <button
                    type="button"
                    onClick={openCloseNav}
                    className="nav-rail-menu"
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

                <div className="nav-rail-social">
                    <a href="#" className="nav-rail-social-icon"><i className="fa-solid fa-globe"></i></a>
                    <a href="#" className="nav-rail-social-icon"><i className="fa-solid fa-share-nodes"></i></a>
                </div>
            </div>
        </nav>
    </>
}