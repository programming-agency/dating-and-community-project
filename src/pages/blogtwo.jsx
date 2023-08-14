import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import SearchBar from "../component/sidebar/search";
import RecentPost from "../component/sidebar/recentpost";
import CategorieTwo from "../component/sidebar/categorietwo";
import Instagram from "../component/sidebar/instagram";
import Archive from "../component/sidebar/archive";
import Tags from "../component/sidebar/tags";
import HeaderTwo from "../component/layout/headertwo";

let BlogPost = [
    {
        imgUrl: 'assets/images/blog/10.jpg',
        imgAlt: 'Dating Blog Thumb',
        title: 'It’s no secret that the digital industry is boom',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?',
        author: 'Rajib Raj',
        date: 'January 01, 2022 10:59 am ',
        comment: '09 Comments',
        btnText: 'read more',
    },
]

let SliderBlogPost = [
    {
        title: 'Globally restore bleeding-edge value through accurate.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?',
        author: 'Rajib Raj',
        date: 'January 01, 2022 10:59 am ',
        comment: '09 Comments',
        btnText: 'read more',
        imgList: [
            {
                imgUrl: 'assets/images/blog/10.jpg',
                imgAlt: 'Dating Blog Thumb',
            },
            {
                imgUrl: 'assets/images/blog/11.jpg',
                imgAlt: 'Dating Blog Thumb',
            },
            {
                imgUrl: 'assets/images/blog/12.jpg',
                imgAlt: 'Dating Blog Thumb',
            },
        ]
    },
]

let VideoBlogPost = [
    {
        imgUrl: 'assets/images/blog/12.jpg',
        imgAlt: 'Dating Blog Thumb',
        videoLink: 'https://www.youtube.com/embed/U9O8G5AreXE',
        title: 'Proactively productivate real-time intellectual capital where.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat neque earum ratione rem cum cumque voluptate in cupiditate itaque consequuntur ducimus eius optio corporis voluptatibus explicabo accusamus, expedita commodi labore, fuga doloribus, eos ab et. Ex, laboriosam! Sunt libero minima, inventore, dolorem ad a eius illo aliquam ipsa iste dolore are praesentium quae totam harum, ipsum sed dicta?',
        author: 'Rajib Raj',
        date: 'January 01, 2022 10:59 am ',
        comment: '09 Comments',
        btnText: 'read more',
    },
]

class BlogPageTwo extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Our Blog Post'} curPage={'Blog'} />
                <div className="blog blog--style2 padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-9 col-12">
                                    <article>
                                        {BlogPost.map((val, i) => (
                                            <div className="blog__item" key={i}>
                                                <div className="blog__inner">
                                                    <div className="blog__thumb">
                                                        <Link to="/blog-single">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </Link>
                                                    </div>
                                                    <div className="blog__content">
                                                        <Link to="/blog-single">
                                                            <h2>{val.title}</h2>
                                                        </Link>
                                                        <ul className="lab-ul blog__date">
                                                            <li><span><i className="fa-solid fa-calendar-days"></i>{val.date}</span></li>
                                                            <li><span><i className="fa-solid fa-user"></i><a href="#">{val.author}</a></span> </li>
                                                            <li><span><i className="fa-solid fa-comments"></i><a href="#">{val.comment}</a></span></li>
                                                        </ul>
                                                        <p>{val.desc}</p>
                                                        <Link to="/blog-single" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        {SliderBlogPost.map((val, i) => (
                                            <div className="blog__item" key={i}>
                                                <div className="blog__inner">
                                                    <div className="blog__thumb blog__slider">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            centeredSlides={true}
                                                            autoplay={{
                                                                delay: 5000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            navigation={{
                                                                prevEl: '.thumb-prev',
                                                                nextEl: '.thumb-next',
                                                            }}
                                                            loop={true}
                                                            modules={[Autoplay, Navigation]}
                                                        >
                                                            {val.imgList.map((val, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                        <div className="thumb-next thumb-nav"><i className="fa-solid fa-angle-right"></i></div>
                                                        <div className="thumb-prev thumb-nav"><i className="fa-solid fa-angle-left"></i></div>
                                                    </div>
                                                    <div className="blog__content">
                                                        <Link to="/blog-single">
                                                            <h2>{val.title}</h2>
                                                        </Link>
                                                        <ul className="lab-ul blog__date">
                                                            <li><span><i className="fa-solid fa-calendar-days"></i>{val.date}
                                                                </span></li>
                                                            <li><span><i className="fa-solid fa-user"></i><a href="#">{val.author}</a></span>
                                                            </li>
                                                            <li><span><i className="fa-solid fa-comments"></i><a href="#">{val.comment}</a></span></li>
                                                        </ul>
                                                        <p>{val.desc}</p>
                                                        <Link to="/blog-single" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {VideoBlogPost.map((val, i) => (
                                            <div className="blog__item" key={i}>
                                                <div className="blog__inner">
                                                    <div className="blog__thumb">
                                                        <Link to="/blog-single">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </Link>
                                                        <a href={val.videoLink} className="play-btn" target="_blank">
                                                            <i className="fa-solid fa-play"></i>
                                                            <span className="pluse_2"></span>
                                                        </a>
                                                    </div>
                                                    <div className="blog__content">
                                                        <Link to="/blog-single">
                                                            <h2>{val.title}</h2>
                                                        </Link>
                                                        <ul className="lab-ul blog__date">
                                                            <li><span><i className="fa-solid fa-calendar-days"></i>{val.date}</span></li>
                                                            <li><span><i className="fa-solid fa-user"></i><a href="#">{val.author}</a></span></li>
                                                            <li><span><i className="fa-solid fa-comments"></i><a href="#">{val.comment}</a></span></li>
                                                        </ul>
                                                        <p>{val.desc}</p>
                                                        <Link to="/blog-single" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <Pagination />
                                    </article>
                                </div>
                                
                                <div className="col-lg-3 col-md-7 col-12">
                                    <aside>
                                        <SearchBar />
                                        <CategorieTwo />
                                        <RecentPost />
                                        <Instagram />
                                        <Archive />
                                        <Tags />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPageTwo;