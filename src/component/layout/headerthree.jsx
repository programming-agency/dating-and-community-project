import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


let HeaderInfoList = [
    {
        iconName: 'fa-solid fa-phone',
        text: '+800-123-4567 6587',
    },
    {
        iconName: 'fa-solid fa-location-dot',
        text: 'Beverley, New York 224 USA',
    },
]

let HeaderSocialList = [
    {
        iconName: 'fa-brands fa-facebook-messenger',
        link: '#'
    },
    {
        iconName: 'fa-brands fa-twitter',
        link: '#'
    },
    {
        iconName: 'fa-brands fa-vimeo-v',
        link: '#'
    },
    {
        iconName: 'fa-brands fa-skype',
        link: '#'
    },
    {
        iconName: 'fa-solid fa-rss',
        link: '#'
    },
]

class HeaderThree extends Component {
    render() {
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header-fixed'], ['animated'], ['fadeInDown'])
            } else {
                document.querySelector('.header').classList.remove(['header-fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header header--style2" id="navbar">
                <div className="header__top d-none d-lg-block">
                    <div className="container">
                        <div className="header__top--area">
                            <div className="header__top--left">
                                <ul>
                                    {HeaderInfoList.map((val, i) => (
                                        <li key={i}>
                                            <i className={val.iconName}></i> <span>{val.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="header__top--right">
                                <ul>
                                    {HeaderSocialList.map((val, i) => (
                                        <li key={i}><a href={val.link}><i className={val.iconName}></i></a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                    <div className="navbar-nav mainmenu">
                                        <ul>
                                            <li>

                                                <Link to="/"> Home</Link>
                                            </li>
                                            <li >
                                                <li><NavLink to="/about">About Us</NavLink></li>
                                            </li>
                                            <li>
                                                <li><NavLink to="/community">Community</NavLink></li>
                                            </li>
                                            <li >
                                                <li><NavLink to="/shop">Product</NavLink></li>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <li><NavLink to="/blog">Blog</NavLink></li>
                                            </li>
                                            <li><NavLink to="/contact">contact</NavLink></li>
                                        </ul>
                                    </div>

                                </div>
                                <ul className="button-group">
                                    <li><Link to="/login" className="default-btn login"><i className="fa-solid fa-user"></i> <span>LOG IN</span> </Link></li>
                                    <li><Link to="/register" className="default-btn signup"><i className="fa-solid fa-users"></i> <span>SIGN UP</span> </Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderThree;