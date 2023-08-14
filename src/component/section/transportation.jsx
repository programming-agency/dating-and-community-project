import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Meet Singles in Your Area";
const desc = "If you want to meet local singles for dating, companionship, friendship or even more, you have come to the right place.";

let TransportContentList = [
    {
        imgUrl: 'assets/images/transport/01.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'United kingdom',
    },
    {
        imgUrl: 'assets/images/transport/02.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Germany',
    },
    {
        imgUrl: 'assets/images/transport/03.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'United states',
    },
    {
        imgUrl: 'assets/images/transport/04.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Brazil',
    },
    {
        imgUrl: 'assets/images/transport/05.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Falkland islands',
    },
    {
        imgUrl: 'assets/images/transport/06.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Portugal',
    },
    {
        imgUrl: 'assets/images/transport/07.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Australia',
    },
    {
        imgUrl: 'assets/images/transport/08.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'India',
    },
    {
        imgUrl: 'assets/images/transport/09.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'South Africa',
    },
    {
        imgUrl: 'assets/images/transport/10.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Bangladesh',
    },
]

class TransportationSection extends Component {
    render() { 
        return (
            <section className="transportation padding-top padding-bottom">
                <div className="container">
                    <div className="section__wrapper">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="left">
                                    <div className="section__header style-2 mb-lg-0 wow fadeInUp" data-wow-duration="1.5s">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                        <ul>
                                            {TransportContentList.map((val, i) => (
                                                <li key={i}>
                                                    <div className="thumb"> <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></div>
                                                    <div className="content"><Link to="/members">{val.countryName}</Link></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="right wow fadeInUp" data-wow-duration="1.5s">
                                    {TransportContentList.map((val, i) => (
                                        <div className="lab-line" key={i}>
                                            <span></span>
                                            <div className="lab-tooltip"><Link to="/members">{val.countryName}</Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TransportationSection;