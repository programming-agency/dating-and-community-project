import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Most Popular Members";
const desc = "Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.";
const btnText = "See More Popular";

let MemberConentListNewest = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Smith Jhonson',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Arika Q Smith',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'William R Show',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Karolin Kuhn',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Tobias Wagner',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Zinat Zaara',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Barros Pereira',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Emily Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Alves Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Sousa Carvalho',
        activity: 'registered 4 months, 1 week ago',
    },
]

let MemberConentListActive = [
    
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'William R Show',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Karolin Kuhn',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Arika Q Smith',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Tobias Wagner',
        activity: 'registered 4 months, 1 week ago',
    },{
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Smith Jhonson',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Sousa Carvalho',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Barros Pereira',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Zinat Zaara',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Alves Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Emily Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
]

let MemberConentListPopular = [
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'William R Show',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Arika Q Smith',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Karolin Kuhn',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Smith Jhonson',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Zinat Zaara',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Tobias Wagner',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Emily Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Sousa Carvalho',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Barros Pereira',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Alves Fernandes',
        activity: 'registered 4 months, 1 week ago',
    },
]

class MemberSectionTwo extends Component {
    render() { 
        return (
            <div className="member member--style2 padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <ul className="nav nav-tabs member__tab" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="newest-tab" data-bs-toggle="tab" data-bs-target="#newest" type="button" role="tab" aria-controls="newest" aria-selected="true">Newest Members</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="activemember-tab" data-bs-toggle="tab" data-bs-target="#activemember" type="button" role="tab" aria-controls="activemember" aria-selected="false">Active Members</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="popularmember-tab" data-bs-toggle="tab" data-bs-target="#popularmember" type="button" role="tab" aria-controls="popularmember" aria-selected="false">Popular Members</button>
                            </li>
                        </ul>

                        <div className="tab-content mx-12-none" id="myTabContent">
                            <div className="tab-pane fade show active" id="newest" role="tabpanel" aria-labelledby="newest-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentListNewest.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to="/member-single"><h5>{val.name}</h5></Link>
                                                    <p>{val.activity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="activemember" role="tabpanel" aria-labelledby="activemember-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentListActive.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to="/member-single"><h5>{val.name}</h5></Link>
                                                    <p>{val.activity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="popularmember" role="tabpanel" aria-labelledby="popularmember-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentListPopular.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to="/member-single"><h5>{val.name}</h5></Link>
                                                    <p>{val.activity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/members" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberSectionTwo;