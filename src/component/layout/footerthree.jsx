import { Component } from "react";
import { Link } from "react-router-dom";


const newstitle = "Newsletter Sign up";
const jointitle = "Join Community";
const aboutTitle = "About Ollya";
const aboutDesc = "Ollya is a friendly dating theme based on HTML template for the community functionality";
const featureTitle = "Featured Members";
const supportTitle = "Contacts & Support";
const recentTitle = "Recent Activity";

let SocialList = [
    {
        iconName: 'fa-brands fa-twitter',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-twitch',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-instagram',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-dribbble',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-facebook-messenger',
        visitLink: '#',
    },
]

let AboutInfo = [
    {
        Name: 'Address',
        Details: 'Suite-13 Tropical Center New Elephant Road 1205',
    },
    {
        Name: 'Contact',
        Details: '+30 226 4881 514 www.yoursitename.com',
    },
]

let FeatureList = [
    {
        imgUrl: 'assets/images/footer/feature/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Samantha Lee',
        activety: 'Active',
        className: 'feature__activity'
    },
    {
        imgUrl: 'assets/images/footer/feature/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Peter McMillan',
        activety: '2 Hours Ago',
        className: 'feature__activity feature__activity--ofline'
    },
    {
        imgUrl: 'assets/images/footer/feature/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Tluagtea Tualzik',
        activety: 'Active',
        className: 'feature__activity'
    },
]

let InfoList = [
    {
        pageName: 'About Us',
        pageLink: '/about',
    },
    {
        pageName: 'Our Team',
        pageLink: '#',
    },
    {
        pageName: 'Testimonials',
        pageLink: '#',
    },
    {
        pageName: 'Get in Touch',
        pageLink: '/contact',
    },
    {
        pageName: 'FAQ',
        pageLink: '#',
    },
]

let RecentPost = [
    {
        imgUrl: 'assets/images/footer/activity/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Where to find a good...',
        pubDate: 'May 13, 2022',
    },
    {
        imgUrl: 'assets/images/footer/activity/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Where to find a good...',
        pubDate: 'May 13, 2022',
    },
    {
        imgUrl: 'assets/images/footer/activity/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Where to find a good...',
        pubDate: 'May 13, 2022',
    },
]

class FooterThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsEmail: '',
        };
    }
    render() { 
        return (
            <footer className="footer footer--style2">
                <div className="footer__top bg_img" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="footer__newsletter">
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
                                                    onChange={(e)=>{this.setState({newsEmail: e.target.value});}}
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
                            <div className="row g-4">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--about">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{aboutTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <p>{aboutDesc}</p>
                                                </div>
                                                <div className="footer__content--info">
                                                    {AboutInfo.map((val, i) => (
                                                        <p key={i}><b>{val.Name} :</b> {val.Details}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--feature">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{featureTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {FeatureList.map((val, i) => (
                                                            <li key={i}>
                                                                <div className="thumb position-relative">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    <span className={val.className}></span>
                                                                </div>
                                                                <div className="content">
                                                                    <Link to="/member-single"><h6>{val.title}</h6></Link>
                                                                    <p>{val.activety}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--support">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{supportTitle}</h4>
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
                                    <div className="footer__item footer--activity">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{recentTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {RecentPost.map((val, i) => (
                                                            <li key={i}>
                                                                <div className="thumb">
                                                                    <Link to="/group-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                </div>
                                                                <div className="content">
                                                                    <Link to="/group-single"><h6>{val.title}</h6></Link>
                                                                    <p>{val.pubDate}</p>
                                                                </div>
                                                            </li>
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
                
                <div className="footer__bottom py-4">
                    <div className="container">
                        <div className="footer__content text-center">
                            <p className="mb-0">All Rights Reserved &copy; <Link to="/"> Ollya </Link> || Design By: CodexCoder</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default FooterThree;