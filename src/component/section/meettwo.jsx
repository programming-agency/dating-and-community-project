import { Component } from "react";
import { Link } from "react-router-dom";


const title = "Meet Singles in Your Area";
const desc = "Find your match in the most popular cities across the globe. Be adventurous and finds someone from others parts of the globe, you never know where love is hiding. ";
const btnText = "Search Near You";


let MeetSectionContentListOne = [
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

let MeetSectionContentListTwo = [
    {
        imgUrl: 'assets/images/meet/06.jpg',
        imgAlt: 'Dating Thumb',
        imgIconUrl: 'assets/images/meet/icon/06.jpg',
        imgIconAlt: 'Dating Thumb',
        title: 'Paris, France',
    },
]

class MeetSectionTwo extends Component {
    render() { 
        return (
            <div className="meet meet--style2 padding-top padding-bottom">
                <div className="container">
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center align-items-center">
                            <div className="col-lg-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                                <div className="section__header">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <Link to="/members" className="default-btn"><span>{btnText}  <i className="fas fa-map-marker-alt ms-2"></i></span></Link>
                                </div>
                            </div>
                            {MeetSectionContentListOne.map((val, i) => (
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

                            {MeetSectionContentListTwo.map((val, i) => (
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
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MeetSectionTwo;