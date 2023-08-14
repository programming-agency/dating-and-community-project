import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import SelectCountry from "../select/selectcountry";
import SelectAge from "../select/selectage";
import SelectGender from "../select/selectgender";

const title = "Welcome To Our Ollya";
const desc = "You find us, finally, and you are already in love. More than 4.000.000 around the world already shared the same experiences and uses our system. Joining us today just got easier!";

const subtitle = "Latest Registered Members";

const rightTitle = "Find Your True Love";
const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const btnText = "Find Your Partner";

let regSliderList = [
    {
        imgUrl: 'assets/images/ragi/01.jpg',
        imgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'assets/images/ragi/02.jpg',
        imgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'assets/images/ragi/03.jpg',
        imgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'assets/images/ragi/04.jpg',
        imgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'assets/images/ragi/05.jpg',
        imgAlt: 'Dating Thumb',
    },
]

class AboutSectionTwo extends Component {
    render() { 
        return (
            <div className="about about--style2 padding-top pt-xl-0">
                <div className="container">
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <div className="row g-0 justify-content-center row-cols-lg-2 row-cols-1">
                            <div className="col">
                                <div className="about__left">
                                    <div className="about__top">
                                        <div className="about__content">
                                            <h3>{title}</h3>
                                            <p>{desc}</p>
                                        </div>
                                    </div>
                                    <div className="about__bottom">
                                        <div className="about__bottom--head">
                                            <h5>{subtitle}</h5>
                                            <div className="about__bottom--navi">
                                                <div className="ragi-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                                <div className="ragi-next active"><i className="fa-solid fa-chevron-right"></i></div>
                                            </div>
                                        </div>
                                        <div className="about__bottom--body">
                                            <div className="ragi__slider overflow-hidden">
                                                <Swiper
                                                    spaceBetween={15}
                                                    centeredSlides={true}
                                                    autoplay={{
                                                        delay: 5000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    navigation={{
                                                        prevEl: '.ragi-prev',
                                                        nextEl: '.ragi-next',
                                                    }}
                                                    loop={true}
                                                    modules={[Autoplay, Navigation]}
                                                    breakpoints={{
                                                        0: {
                                                        width: 0,
                                                        slidesPerView: 2,
                                                        },
                                                        768: {
                                                        width: 768,
                                                        slidesPerView: 4,
                                                        },
                                                        1200: {
                                                        width: 1200,
                                                        slidesPerView: 10,
                                                        },
                                                    }}
                                                >
                                                    {regSliderList.map((val, i) => (
                                                        <SwiperSlide key={i}>
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="about__right">
                                    <div className="about__title">
                                        <h3>{rightTitle}</h3>
                                    </div>
                                    <form action="#">
                                        <div className="banner__list">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label>{labelchangeone}</label>
                                                    <div className="banner__inputlist">
                                                        <SelectGender select={'male'} />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label>{labelchangetwo}</label>
                                                    <div className="banner__inputlist">
                                                        <SelectGender select={'female'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner__list">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <label>{labelchangethree}</label>
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
                                                <div className="col-lg-6 col-12">
                                                    <label>{labelchangefour}</label>
                                                    <div className="banner__inputlist">
                                                        <SelectCountry select={'Bangladesh'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="default-btn reverse d-block"><span>{btnText}</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionTwo;