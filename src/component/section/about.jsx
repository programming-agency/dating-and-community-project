import { Component } from "react";

const title = "Ollya Super Powers";
const subtitle = "Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.";

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Simple To Use',
        desc: 'Simple steps to follow to have a matching connection.',
    },
    {
        imgUrl: 'assets/images/about/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Smart Matching',
        desc: 'Create connections with users that are like you.',
    },
    {
        imgUrl: 'assets/images/about/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Filter Very Fast',
        desc: 'Don’t waste your time! Find only what you are interested.',
    },
    {
        imgUrl: 'assets/images/about/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Cool Community',
        desc: 'BuddyPress network is full of cool members.',
    },
]

class AboutSection extends Component {
    render() { 
        return (
            <div className="about padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {AboutContentList.map((val, i) => (
                                <div className="col wow fadeInUp" data-wow-duration="1.5s" key={i}>
                                    <div className="about__item text-center">
                                        <div className="about__inner">
                                            <div className="about__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="about__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
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
 
export default AboutSection;