import { Component } from "react";
import CountUp from 'react-countup';

const title = "It All Starts With A Date";
const desc = "Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.";
const btnText = "Our TV Commercial";
const videoLink = "https://www.youtube.com/embed/U9O8G5AreXE"

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/icon/home3/01.png',
        imgAlt: 'Dating Thumb',
        count: '990960',
        desc: 'Members in Total',
    },
    {
        imgUrl: 'assets/images/about/icon/home3/02.png',
        imgAlt: 'Dating Thumb',
        count: '628590',
        desc: 'Members Online',
    },
    {
        imgUrl: 'assets/images/about/icon/home3/03.png',
        imgAlt: 'Dating Thumb',
        count: '314587',
        desc: 'Men Online',
    },
    {
        imgUrl: 'assets/images/about/icon/home3/04.png',
        imgAlt: 'Dating Thumb',
        count: '102369',
        desc: 'Women Online',
    },
]

class AboutSectionFive extends Component {
    render() { 
        return (
            <div className="about about--style4 padding-top padding-bottom bg_img" style={{backgroundImage: "url(/assets/images/bg-img/02.jpg)"}}>
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 wow fadeInUp" data-wow-duration="1.5s">
                            {AboutContentList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="about__item text-center">
                                        <div className="about__inner">
                                            <div className="about__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="about__content">
                                                <h3><span className="counter"><CountUp end={val.count} /></span></h3>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5 wow fadeInUp" data-wow-duration="2s">
                            <a href={videoLink} className="default-btn" target="_blank"><span>{btnText} <i className="fas fa-video"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionFive;