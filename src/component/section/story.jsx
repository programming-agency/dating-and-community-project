import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Ollya Success Stories";
const desc = "Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.";

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
]


class StorySection extends Component {
    render() { 
        return (
            <div className="story bg_img padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/bg-img/02.jpg)"}}>
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
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
                    </div>
                </div>
            </div>
        );
    }
}
 
export default StorySection;