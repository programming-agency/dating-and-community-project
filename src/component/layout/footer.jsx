import { Component } from "react";
import { Link } from "react-router-dom";

const newstitle = "Newsletter Sign up";
const jointitle = "Join Community";
const infotitle = "Our Information";
const accountTitle = "My Account";
const helpTitle = "Help Center";
const communityTitle = "Community";


let SocialList = [
    {
        iconName: 'fa-brands fa-whatsapp',
        visitLink: 'https://web.whatsapp.com/01518919421',
    },
    {
        iconName: 'fa-brands fa-instagram',
        visitLink: 'https://www.instagram.com/programming_agency/',
    },
    {
        iconName: 'fa-brands fa-facebook-messenger',
        visitLink: 'https://www.facebook.com/programming.agency23/',
    },

    {
        iconName: 'fa-brands fab fa-youtube',
        visitLink: 'https://www.youtube.com/channel/UCAqMNl8mGM-JVDHowBnYQSA',
    },


    {
        iconName: 'fa-brands fa-twitter',
        visitLink: 'https://twitter.com/Programm_agency',
    },
]

let InfoList = [
    {
        pageName: 'About Us',
        pageLink: '/about',
    },
    {
        pageName: 'Contact Us',
        pageLink: '/contact',
    },
    {
        pageName: 'Customer Reviews',
        pageLink: '#',
    },
    {
        pageName: 'Success Stories',
        pageLink: '#',
    },
    {
        pageName: 'Business License',
        pageLink: '#',
    },
]

let InfoListTwo = [
    {
        pageName: 'Manage Account',
        pageLink: '#',
    },
    {
        pageName: 'Safety Tips',
        pageLink: '#',
    },
    {
        pageName: 'Account Varification',
        pageLink: '#',
    },
    {
        pageName: 'Safety and Security',
        pageLink: '#',
    },
    {
        pageName: 'Membership Level',
        pageLink: '#',
    },
]

let InfoListThree = [
    {
        pageName: 'Help center',
        pageLink: '#',
    },
    {
        pageName: 'FAQ',
        pageLink: '#',
    },
    {
        pageName: 'Quick Start Guide',
        pageLink: '#',
    },
    {
        pageName: 'Tutorials',
        pageLink: '#',
    },
    {
        pageName: 'Associate Blog',
        pageLink: '#',
    },
]

let InfoListFour = [
    {
        pageName: 'Privacy policy',
        pageLink: '/policy',
    },
    {
        pageName: 'End User Agreements',
        pageLink: '#',
    },
    {
        pageName: 'Refund Policy',
        pageLink: '#',
    },
    {
        pageName: 'Cookie policy',
        pageLink: '#',
    },
    {
        pageName: 'Report abuse',
        pageLink: '#',
    },
]


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsEmail: '',
        };
    }
    render() {
        return (
            <footer className="footer overflow-hidden">
                <div className="footer__top bg_img" style={{ backgroundImage: "url(/assets/images/footer/bg-3.jpg)" }}>
                    <div className="footer__newsletter wow fadeInUp" data-wow-duration="1.5s">
                        <div className="container">
                            <div className="row g-4 justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <div className="footer__newsletter--area">
                                        <div className="footer__newsletter--title">
                                            <h4>{newstitle}</h4>
                                        </div>
                                        <div className="footer__newsletter--form">
                                            <form action="#">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="item01"
                                                    value={this.state.newsEmail}
                                                    onChange={(e) => { this.setState({ newsEmail: e.target.value }); }}
                                                    placeholder="Your email address *"
                                                />
                                                <button type="submit" className="default-btn"><span>Subscribe</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="footer__newsletter--area justify-content-xxl-end">
                                        <div className="footer__newsletter--title me-xl-4">
                                            <h4>{jointitle}</h4>
                                        </div>
                                        <div className="footer__newsletter--social">
                                            <ul>
                                                {SocialList.map((val, i) => (
                                                    <li key={i}><Link to={`${val.visitLink}`}><i className={`${val.iconName}`}></i></Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__toparea padding-top padding-bottom wow fadeInUp" data-wow-duration="1.5s">
                        <div className="container">
                            <div className="row g-5 g-lg-0">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{infotitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoList.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{accountTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListTwo.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{helpTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListThree.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{communityTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListFour.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom wow fadeInUp" data-wow-duration="1.5s">
                    <div className="container">
                        <div className="footer__content text-center">
                            <p className="mb-0">All Rights Reserved &copy; <a href="https://www.programming-agency.com/">Programming Agency</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;