import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderThree from "../component/layout/headerthree";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";


let StorySectionContentList = [
    {
        imgUrl: 'assets/images/story/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Rajib Raj',
        postDate: 'May 15, 2022',
    },
    {
        imgUrl: 'assets/images/story/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Umme Nishat',
        postDate: 'May 19, 2022',
    },
    {
        imgUrl: 'assets/images/story/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Angel Mili',
        postDate: 'May 20, 2022',
    },
    {
        imgUrl: 'assets/images/story/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Rajib Raj',
        postDate: 'May 15, 2022',
    },
    {
        imgUrl: 'assets/images/story/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Umme Nishat',
        postDate: 'May 19, 2022',
    },
    {
        imgUrl: 'assets/images/story/06.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Angel Mili',
        postDate: 'May 20, 2022',
    },
    {
        imgUrl: 'assets/images/story/07.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Rajib Raj',
        postDate: 'May 15, 2022',
    },
    {
        imgUrl: 'assets/images/story/08.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Umme Nishat',
        postDate: 'May 19, 2022',
    },
    {
        imgUrl: 'assets/images/story/09.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Dream places and locations to visit in 2022',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: 'Angel Mili',
        postDate: 'May 20, 2022',
    },
]

class CommunityPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderThree />
                <PageHeader title={'Community Page'} curPage={'Community'} />
                <div className="community story padding-top padding-bottom">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="member__info mb-4">
                                <div className="member__info--left">
                                    <div className="member__info--filter">
                                        <div className="default-btn" onClick={this.modalview}><span>Filter Your Search <i className="fa-solid fa-sliders"></i></span></div>
                                    </div>
                                    <div className="member__info--count">
                                        <div className="default-btn"><span>All Members</span></div>
                                        <p>20</p>
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
                            <div className="row g-4 justify-content-center mx-12-none row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                {StorySectionContentList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="story__item">
                                            <div className="story__inner">
                                                <div className="story__thumb">
                                                    <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                    <span className="member__activity member__activity--ofline">{val.activity}</span>
                                                </div>
                                                <div className="story__content">
                                                    <Link to="/blog-single"><h4>{val.title}</h4></Link>
                                                    <div className="story__content--author">
                                                        <div className="story__content--thumb">
                                                            <img src={`${val.authorImg}`} alt={`${val.authorImgAlt}`} />
                                                        </div>
                                                        <div className="story__content--content">
                                                            <h6>{val.authorName}</h6>
                                                            <p>{val.postDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
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
 
export default CommunityPage;