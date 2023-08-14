import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footerthree";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import AboutSectionFour from "../component/section/aboutfour";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import HeaderTwo from "../component/layout/headertwo";
import { Link } from "react-router-dom";

const pagecount = "Viewing 1 - 20 of 12,345 Members";

let GroupPageContentList = [
    {
        imgUrl: 'assets/images/group/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Be young, love life',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/04.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Learn How To Love',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '14+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Love, health and...',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '30+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Ollya Dating Theme...',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '25+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Skip Relation Routine',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '18+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/06.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Gay Community',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '15+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/07.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Only Buddies',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/08.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Love Stories',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/04.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/09.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Be Young, Love Life',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/10.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Continually bandwidth rather.',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/11.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Conveniently simplify exceptional.',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/04.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/12.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Seamlessly architect scalable.',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
]

class GroupPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Ollya All Groups'} curPage={'Groups'} />
                <AboutSectionFour />
                <div className="member story story--style2 padding-top padding-bottom overflow-hidden">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="member__info mb-4">
                                <div className="member__info--left">
                                    <div className="member__info--filter">
                                        <div className="default-btn" onClick={this.modalview}><span>Filter Your Search <i className="fa-solid fa-sliders"></i></span></div>
                                    </div>
                                    <div className="member__info--count">
                                        <div className="default-btn"><span>All Members</span></div>
                                        <p>20365587</p>
                                    </div>
                                </div>
                                <div className="member__info--right">
                                    <div className="member__info--customselect right w-100">
                                        <div className="default-btn"><span>Order By:</span></div>
                                        <div className="banner__inputlist">
                                            <select>
                                                <option value="0">Last Active </option>
                                                <option value="1">Oldest</option>
                                                <option value="2">Popular</option>
                                                <option value="3">Most Active</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1">
                                {GroupPageContentList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="story__item style2 story--theme-color">
                                            <div className="story__inner">
                                                <div className="story__thumb position-relative">
                                                    <Link to="/group-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                    <span className="member__activity member__activity--ofline">{val.activety}</span>
                                                </div>
                                                <div className="story__content px-0 pb-0">
                                                    <Link to="/group-single"><h4>{val.title}</h4></Link>
                                                    <p>{val.desc}</p>
                                                    <div className="story__content--author justify-content-between border-top pt-3">
                                                        <div className="story__content--content">
                                                            <p><i className="fa-solid fa-earth-africa"></i> {val.group}</p>
                                                        </div>
                                                        <ul className="img-stack">
                                                            {val.groupMemList.map((val, i) => (
                                                                <li key={i}>
                                                                    <Link to="/member-single">
                                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                                        <div className="time-tooltip">
                                                                            <div className="time-tooltip-holder">
                                                                                <span className="tooltip-info">{val.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                            <li className="bg-theme">
                                                                <Link to="/member-single">
                                                                    {val.moreMember}
                                                                    <div className="time-tooltip">
                                                                        <div className="time-tooltip-holder">
                                                                            <span className="tooltip-info">More</span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="member__pagination mt-4">
                                <div className="member__pagination--left">
                                    <p>{pagecount}</p>
                                </div>
                                <div className="member__pagination--right">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Filter your search</h5>
                                <button type="button" className="btn-close" onClick={this.modalview}></button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="banner__list">
                                        <div className="row align-items-center row-cols-1">
                                            <div className="col">
                                                <label>I am a</label>
                                                <div className="banner__inputlist">
                                                    <SelectGender select={'male'} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label>Looking for</label>
                                                <div className="banner__inputlist">
                                                    <SelectGender select={'female'} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label>Age</label>
                                                <div className="row g-3">
                                                    <div className="col-6">
                                                        <div className="banner__inputlist">
                                                            <SelectAge select={'18'} />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="banner__inputlist">
                                                            <SelectAge select={'25'} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label>Country</label>
                                                <div className="banner__inputlist">
                                                    <SelectCountry select={'Bangladesh'} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <button type="submit" className="default-btn reverse d-block"><span>Find Your Partner</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default GroupPage;