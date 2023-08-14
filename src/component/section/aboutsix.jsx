import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Hello My Friend";
const subtitle = "We are here to build emotion, connect people and create happy stories.";
const desc = "Seeko is a friendly dating theme based on BuddyPress for the community functionality. It allows you to easily create and community for dating. You can add your own branding text and images right away.";
const btnText = "Get A Membership";
const imgUrl = "assets/images/about/01.png";
const imgAlt = "Dating Thumb";

class AboutSectionSix extends Component {
    render() { 
        return (
            <div className="about about--style5 padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center g-4 align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about__thumb">
                                <img src={`${imgUrl}`} alt={`${imgAlt}`} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about__content">
                                <h2>{title}</h2>
                                <h5>{subtitle}</h5>
                                <p>{desc}</p>
                                <Link to="/membership" className="default-btn reverse"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionSix;