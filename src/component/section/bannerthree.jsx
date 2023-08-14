import { Component } from "react";
import { Link } from "react-router-dom";

const title = <h2>We Have More Than <span>2.000.000</span> Join Members</h2>;
const desc = "Still looking for your significant other? Ollya is the place for you! Join now to meet single men and women worldwide.";
const btnText = "Registration Now";

const animateTitle = "Are You Waiting For Dating?";
const imgLink = "assets/images/banner/shape/home3/01.png";
const imgAlt = "Dating Thumb";

class BannerThree extends Component {
    render() { 
        return (
            <div className="banner banner--style3 padding-top bg_img" style={{backgroundImage: "url(/assets/images/banner/bg-3.jpg)"}}>
                <div className="container">
                    <div className="row g-0 justify-content-center justify-content-xl-between">
                        <div className="col-lg-5 col-12 wow fadeInLeft" data-wow-duration="1.5s">
                            <div className="banner__content">
                                <div className="banner__title">
                                    {title}
                                    <p>{desc}</p>
                                    <Link to="/register" className="default-btn style-2"><span>{btnText}</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                            <div className="banner__thumb text-xl-end">
                                <img src="assets/images/banner/03.png" alt="banner" />
                                <div className="banner__thumb--shape">
                                    <div className="shapeimg">
                                        <img src={imgLink} alt={imgAlt} />
                                    </div>
                                </div>
                                <div className="banner__thumb--title">
                                    <h4>{animateTitle}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BannerThree;