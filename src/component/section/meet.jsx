import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Meet Singles in Your Area";
const desc = "Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.";
const btnText = "Search Near You";


let MeetSectionContentListOne = [
    {
        imgUrl: 'assets/images/meet/01.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/01.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'New York, USA',
    },
]

let MeetSectionContentListTwo = [
    {
        imgUrl: 'assets/images/meet/02.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/02.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'London, UK',
    },
    {
        imgUrl: 'assets/images/meet/03.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/03.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'Barcelona, Spain',
    },
    {
        imgUrl: 'assets/images/meet/04.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/04.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'Taj Mahal, India',
    },
    {
        imgUrl: 'assets/images/meet/05.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/05.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'Burj Al Arab, Dubai',
    },
]

let MeetSectionContentListThree = [
    {
        imgUrl: 'assets/images/meet/06.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/06.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'Paris, France',
    },
]

class MeetSection extends Component {
    render() { 
        return (
            <div className="meet padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center wow fadeInUp" data-wow-duration="1.5s">
                            {MeetSectionContentListOne.map((val, i) => (
                                <div className="col-lg-6 col-12" key={i}>
                                    <div className="meet__item">
                                        <div className="meet__inner">
                                            <div className="meet__thumb">
                                                <Link to="/members"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="meet__content">
                                                <img src={`${val.imgIconUrl}`} alt={`${val.imgIconAlt}`} />
                                                <Link to="/members"><h4>{val.title}</h4></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {MeetSectionContentListTwo.map((val, i) => (
                                <div className="col-lg-3 col-sm-6 col-12" key={i}>
                                    <div className="meet__item">
                                        <div className="meet__inner">
                                            <div className="meet__thumb">
                                                <Link to="/members"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="meet__content">
                                                <img src={`${val.imgIconUrl}`} alt={`${val.imgIconAlt}`} />
                                                <Link to="/members"><h4>{val.title}</h4></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {MeetSectionContentListThree.map((val, i) => (
                                <div className="col-lg-6 col-12" key={i}>
                                    <div className="meet__item">
                                        <div className="meet__inner">
                                            <div className="meet__thumb">
                                                <Link to="/members"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="meet__content">
                                                <img src={`${val.imgIconUrl}`} alt={`${val.imgIconAlt}`} />
                                                <Link to="/members"><h4>{val.title}</h4></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5 wow fadeInUp" data-wow-duration="1.5s">
                            <Link to="/members" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MeetSection;