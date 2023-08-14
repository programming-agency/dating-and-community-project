import { Component } from "react";

const subtitle = "Easy Connect To Everyone";
const title = "Download App Our Ollya";
const desc = "You find us, finally and you are already in love. More than 5.000.000 around the world already shared the same experience andng ares uses our system Joining us today just got easier!";



let AppList = [
    {
        imgUrl: 'assets/images/app/01.jpg',
        imgAlt: 'Dating Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/app/02.jpg',
        imgAlt: 'Dating Thumb',
        siteLink: '#',
    },
]


class AppSection extends Component {
    render() { 
        return (
            <div className="app padding-top">
                <div className="container">
                    <div className="row g-4 justify-content-center flex-row-reverse">
                        <div className="col-xxl-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                            <div className="app__item">
                                <div className="app__inner">
                                    <div className="app__content">
                                        <h4>{subtitle}</h4>
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                        <ul>
                                            {AppList.map((val, i) => (
                                                <li key={i}><a href={`${val.siteLink}`}><img src={`${val.imgUrl}`} alt={`${val.imgUrl}`} /></a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                            <div className="app__item">
                                <div className="app__inner">
                                    <div className="app__thumb">
                                        <img src="assets/images/app/01.png" alt="dating thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AppSection;