import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class HeaderOne extends Component {
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header-fixed'], ['animated'], ['fadeInDown'])
            }else{
                document.querySelector('.header').classList.remove(['header-fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header" id="navbar">
                <div className="header__bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler--icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav mainmenu">
                                    <ul>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/" className={'active'}>Home Page One</NavLink></li>
                                                <li><NavLink to="/index-2">Home Page Two</NavLink></li>
                                                <li><NavLink to="/index-3">Home Page Three</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/about">About Us</NavLink></li>
                                                <li><NavLink to="/membership">Membership</NavLink></li>
                                                <li><NavLink to="/comingsoon">comingsoon</NavLink></li>
                                                <li><NavLink to="/404">404</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Community</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/community">Community</NavLink></li>
                                                <li><NavLink to="/group">All Group</NavLink></li>
                                                <li><NavLink to="/members">All Members</NavLink></li>
                                                <li><NavLink to="/activity">Activity</NavLink></li>

                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Shops</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/shop">Product</NavLink></li>
                                                <li><NavLink to="/shop-single">Product Details</NavLink></li>
                                                <li><NavLink to="/shop-cart">Product Cart</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blogs</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/blog">Blog</NavLink></li>
                                                <li><NavLink to="/blog-2">Blog Style Two</NavLink></li>
                                                <li><NavLink to="/blog-single">Blog Details</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className="header__more">
                                    <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                                    <ul className="dropdown-menu" aria-labelledby="moreoption">
                                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderOne;