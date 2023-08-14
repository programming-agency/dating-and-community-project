import { Component } from "react";
import { Link } from "react-router-dom";


const title = "Only True People";
const desc = "Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.";
const btnText = "View More Popular";

let MemberSectionThreeContentList = [
    {
        imgUrl: 'assets/images/member/home3/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Julia Kaestner',
        activity: 'Active 10 days ago',
    },
    {
        imgUrl: 'assets/images/member/home3/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Matthias Freud',
        activity: 'Active 01 days ago',
    },
    {
        imgUrl: 'assets/images/member/home3/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Petra Egger',
        activity: 'Active 10 Minite ago',
    },
    {
        imgUrl: 'assets/images/member/home3/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Alexander Maier',
        activity: 'Active 03 days ago',
    },
    {
        imgUrl: 'assets/images/member/home3/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Felix Glockner',
        activity: 'Active 02 days ago',
    },
    {
        imgUrl: 'assets/images/member/home3/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Julia Sanger',
        activity: 'Active 30 Minite ago',
    },
    {
        imgUrl: 'assets/images/member/home3/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Niklas Mueller',
        activity: 'Active Now',
    },
    {
        imgUrl: 'assets/images/member/home3/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Zinat Zaara',
        activity: 'Active Now',
    },
]

class MemberSectionThree extends Component {
    render() { 
        return (
            <div className="member member--style3 padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-0 mx-12-none justify-content-center wow fadeInUp" data-wow-duration="1.5s">
                            {MemberSectionThreeContentList.map((val, i) => (
                                <div className="member__item" key={i}>
                                    <div className="member__inner">
                                        <div className="member__thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="member__content">
                                            <Link to="/member-single"><h5>{val.name}</h5></Link>
                                            <p>{val.activity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4 wow fadeInUp" data-wow-duration="2s">
                            <Link to="/members" className="default-btn"><span>{btnText} <i className="ms-2 fas fa-users"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberSectionThree;