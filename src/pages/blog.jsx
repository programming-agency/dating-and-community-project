import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";

let BlogContentListOne = [
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Dramatically procrastinate extensive testing procedures.',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]

let BlogContentListTwo = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Compellingly productivate innovative niches rather.',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Enthusiastically pursue cross functional systems.',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]


let BlogContentListThree = [
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinctively synthesize goal-oriente.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Distinct edeine resour for ramatica.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Compellingly pontificate low-risk.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/07.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Efficiently recaptiualize impactful.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/08.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Appropriately donate in extensible.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
    {
        imgUrl: 'assets/images/blog/09.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Monotonectally with coordinate flexible.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Rajib Raj',
    },
]


class BlogPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Our Blog Post'} curPage={'Blog'} />
                <div className="blog-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                {BlogContentListOne.map((val, i) => (
                                    <div className="col-12" key={i}>
                                        <div className="blog__item">
                                            <div className="blog__inner d-flex flex-wrap align-items-center">
                                                <div className="blog__thumb w-xl-50 w-100">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="blog__metapost">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-btn"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {BlogContentListTwo.map((val, i) => (
                                    <div className="col-lg-6 col-12" key={i}>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog__content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="blog__metapost">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {BlogContentListThree.map((val, i) => (
                                    <div className="col-xl-4 col-md-6 col-12" key={i}>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog__content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="blog__metapost">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-btn"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPage;