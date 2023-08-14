import { Component } from "react";
import SelectAge from "../select/selectage";
import SelectCountry from "../select/selectcountry";
import SelectGender from "../select/selectgender";

const title = "Filter your search";
const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const searchBtnText = "Find Your Partner";

class ModalSearch extends Component {
    render() { 
        return (
            <div className="modal-content border-0 mb-4">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel1">{title}</h5>
                </div>
                <div className="modal-body">
                    <form action="#">
                        <div className="banner__list">
                            <div className="row align-items-center row-cols-1">
                                <div className="col">
                                    <label>{labelchangeone}</label>
                                    <div className="banner__inputlist">
                                        <SelectGender select={'male'} />
                                    </div>
                                </div>
                                <div className="col">
                                    <label>{labelchangetwo}</label>
                                    <div className="banner__inputlist">
                                        <SelectGender select={'female'} />
                                    </div>
                                </div>
                                <div className="col">
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
                                <div className="col">
                                    <label>{labelchangefour}</label>
                                    <div className="banner__inputlist">
                                        <SelectCountry select={'Bangladesh'} />
                                    </div>
                                </div>
                                <div className="col">
                                    <button type="submit" className="default-btn d-block w-100"><span>{searchBtnText} </span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default ModalSearch;