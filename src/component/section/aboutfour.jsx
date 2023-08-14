import { Component } from "react";
import SelectAge from "../select/selectage";
import SelectCountry from "../select/selectcountry";
import SelectGender from "../select/selectgender";

const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const btnText = "Find Your Partner";

class AboutSectionFour extends Component {
    render() { 
        return (
            <div className="about about--style3 padding-top pt-xl-0">
                <div className="container">
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <form action="#">
                            <div className="banner__list">
                                <div className="row align-items-center row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1">
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
                                    <div className="col">
                                        <label>{labelchangethree}</label>
                                        <div className="row">
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
                                        <label>{labelchangefour}</label>
                                        <div className="banner__inputlist">
                                            <SelectCountry select={'Bangladesh'} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="default-btn reverse d-block"><span>{btnText}</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionFour;