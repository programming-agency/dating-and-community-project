import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import SelectProduct from "../component/select/selectproduct";
import ActiveGroup from "../component/sidebar/group";
import ActiveMember from "../component/sidebar/member";
import ModalSearch from "../component/sidebar/modalsearch";

const btnText = "Load More";

let ActivityPageContentList = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Daniel Becker',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Thorsten Schwab',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Leah Friedman',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Maximilian Schmidt',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Michelle Foerster',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Tom Frankfurter',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Karolin Thalberg',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Christian Nadel',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Stefanie Farber',
        text: 'became a registered member',
        activety: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        name: 'Christine Winkel',
        text: 'became a registered member',
        activety: '2 days ago',
    },
]


class ActivityPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Activity Page'} curPage={'Activity'} />
                <div className="activity padding-top padding-bottom">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-9">
                                <div className="group__bottom--area">
                                    <div className="group__bottom--head">
                                        <div className="left">
                                            <form action="#">
                                                <input type="text" name="search" placeholder="search" className="" />
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                            </form>
                                        </div>
                                        <div className="right">
                                            Orader By:
                                            <div className="banner__inputlist">
                                                <SelectProduct select={'Newest'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group__bottom--body bg-white">
                                        <div className="group__bottom--group">
                                            <div className="row g-4 justify-content-center mx-12-none row-cols-1">
                                                {ActivityPageContentList.map((val, i) => (
                                                    <div className="col" key={i}>
                                                        <div className="activity__item">
                                                            <div className="activity__inner">
                                                                <div className="activity__thumb">
                                                                    <Link to="/member-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                </div>
                                                                <div className="activity__content">
                                                                    <h5>
                                                                        <Link to="/member-single">{val.name} </Link>
                                                                        <span>{val.text}</span>
                                                                    </h5>
                                                                    <p>{val.activety}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-center mt-5">
                                                <a href="#" className="default-btn reverse"><span><i className="fa-solid fa-spinner"></i> {btnText}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="group__bottom--right">
                                    <ModalSearch />
                                    <ActiveMember />
                                    <ActiveGroup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default ActivityPage;