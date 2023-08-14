import { Component } from "react";
import { Link } from "react-router-dom";
import CountDown from "../component/section/countdown";

const title = "We're Coming Soon!";
const desc = "We are working hard to bring you new experience";

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

class ComingSoonPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsEmail: '',
        };
    }
    render() { 
        return (
            <section className="log-reg comingsoon">
                <div className="top-menu-area">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-6">
                                <div className="logo">
                                    <Link to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <Link to="/" className="backto-home"><i className="fas fa-chevron-left"></i> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="image image-comingsoon"></div>
                        <div className="col-lg-7 ">
                            <div className="log-reg-inner">
                                <div className="main-content inloginp">
                                    <div className="text-content text-center">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                    </div>
				                    <CountDown />
                                    <form action="#" className="mb-4">
                                        <input 
                                            type="email"
                                            name="email"
                                            id="item01"
                                            value={this.state.newsEmail}
                                            onChange={(e)=>{this.setState({newsEmail: e.target.value});}}
                                            placeholder="Enter your email here to stay tuned *" 
                                        />
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                    <div className="footer__newsletter--social">
                                        <ul className="justify-content-center">
                                            {SocialList.map((val, i) => (
                                                <li key={i}><a href={`${val.visitLink}`}><i className={`${val.iconName}`}></i></a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default ComingSoonPage;