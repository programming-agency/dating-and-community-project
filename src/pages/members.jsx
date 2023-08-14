import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import AboutSectionFour from "../component/section/aboutfour";
import Pagination from "../component/section/pagination";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import SelectProduct from "../component/select/selectproduct";


let MemberContentList = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rajib Raj',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Angel Mili',
        activity: '20 Minutes Ago',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Kim Knudsen',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Umme Nishat',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Sajahan Sagor',
        activity: '55 Minutes Ago',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Zinat Zaara',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rajib Ahmed',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Sabrina Kabir',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Somrat Islam',
        activity: '2 Hours Ago',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rasmi Rahani',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rajib Raj',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Angel Mili',
        activity: '20 Minutes Ago',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Kim Knudsen',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Umme Nishat',
        activity: 'Active',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Sajahan Sagor',
        activity: '55 Minutes Ago',
        className: 'member__activity member__activity--ofline',
    },
]


class MembersPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Ollya All Members'} curPage={'All Members'} />
                <AboutSectionFour />
                <div className="member member--style2 padding-top padding-bottom">
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
                                            <SelectProduct select={'Newest'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 justify-content-center mx-12-none">
                                {MemberContentList.map((val, i) => (
                                    <div className="member__item" key={i}>
                                        <div className="member__inner">
                                            <div className="member__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                <span className={val.className}></span>
                                            </div>
                                            <div className="member__content">
                                                <Link to="/member-single"><h5>{val.title}</h5></Link>
                                                <p>{val.activity}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="member__pagination mt-4">
                                <div className="member__pagination--left">
                                    <p>Viewing 1 - 20 of 12,345 Members</p>
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
 
export default MembersPage;