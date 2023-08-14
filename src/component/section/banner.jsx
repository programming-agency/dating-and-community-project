import { Component } from "react";

const title = "Find your ture love";
const desc = "Serious dating with your perfect match is just a click away.";

const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const btnText = "Find Your Partner";


const imgLink = "assets/images/banner/01.png";
const imgAlt = "Dating Thumb";

class BannerOne extends Component {
    render() { 
        return (
            <div className="banner padding-top padding-bottom bg_img" style={{backgroundImage: "url(/assets/images/banner/bg.jpg)"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <div className="banner__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="banner__title">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="banner__form">
                                    <form action="#">
                                        <div className="banner__list">
                                            <label>{labelchangeone}</label>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="banner__inputlist" htmlFor="male">
                                                        <input type="radio" id="male" name="me" className="male" defaultChecked />
                                                        <span>Male</span>
                                                        <span className="banner__inputlist--icon"><i className="fa-solid fa-mars"></i></span>
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <label className="banner__inputlist" htmlFor="female">
                                                        <input type="radio" id="female" name="me" className="female" />
                                                        <span>Female</span>
                                                        <span className="banner__inputlist--icon"><i className="fa-solid fa-venus"></i></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner__list">
                                            <label>{labelchangetwo}</label>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="banner__inputlist" htmlFor="male2">
                                                        <input type="radio" id="male2" name="me2" className="male" />
                                                        <span>Male</span>
                                                        <span className="banner__inputlist--icon"><i className="fa-solid fa-mars"></i></span>
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <label className="banner__inputlist" htmlFor="female2">
                                                        <input type="radio" id="female2" name="me2" className="female" defaultChecked />
                                                        <span>Female</span>
                                                        <span className="banner__inputlist--icon"><i className="fa-solid fa-venus"></i></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner__list">
                                            <label>{labelchangethree}</label>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="banner__inputlist">
                                                        <select>
                                                            <option defaultValue="18">18</option>
                                                            <option defaultValue="19">19</option>
                                                            <option defaultValue="20">20</option>
                                                            <option defaultValue="21">21</option>
                                                            <option defaultValue="22">22</option>
                                                            <option defaultValue="23">23</option>
                                                            <option defaultValue="24">24</option>
                                                            <option defaultValue="25">25</option>
                                                            <option defaultValue="26">26</option>
                                                            <option defaultValue="27">27</option>
                                                            <option defaultValue="28">28</option>
                                                            <option defaultValue="29">29</option>
                                                            <option defaultValue="30">30</option>
                                                            <option defaultValue="31">31</option>
                                                            <option defaultValue="32">32</option>
                                                            <option defaultValue="33">33</option>
                                                            <option defaultValue="34">34</option>
                                                            <option defaultValue="35">35</option>
                                                            <option defaultValue="36">36</option>
                                                            <option defaultValue="37">37</option>
                                                            <option defaultValue="38">38</option>
                                                            <option defaultValue="39">39</option>
                                                            <option defaultValue="40">40</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="banner__inputlist">
                                                        <select>
                                                            <option defaultValue="25">25</option>
                                                            <option defaultValue="18">18</option>
                                                            <option defaultValue="19">19</option>
                                                            <option defaultValue="20">20</option>
                                                            <option defaultValue="21">21</option>
                                                            <option defaultValue="22">22</option>
                                                            <option defaultValue="23">23</option>
                                                            <option defaultValue="24">24</option>
                                                            <option defaultValue="26">26</option>
                                                            <option defaultValue="27">27</option>
                                                            <option defaultValue="28">28</option>
                                                            <option defaultValue="29">29</option>
                                                            <option defaultValue="30">30</option>
                                                            <option defaultValue="31">31</option>
                                                            <option defaultValue="32">32</option>
                                                            <option defaultValue="33">33</option>
                                                            <option defaultValue="34">34</option>
                                                            <option defaultValue="35">35</option>
                                                            <option defaultValue="36">36</option>
                                                            <option defaultValue="37">37</option>
                                                            <option defaultValue="38">38</option>
                                                            <option defaultValue="39">39</option>
                                                            <option defaultValue="40">40</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner__list">
                                            <label>{labelchangefour}</label>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="banner__inputlist">
                                                        <select id="country" name="country">
                                                            <option defaultValue="Bangladesh">Bangladesh</option>
                                                            <option defaultValue="Afganistan">Afghanistan</option>
                                                            <option defaultValue="Albania">Albania</option>
                                                            <option defaultValue="Algeria">Algeria</option>
                                                            <option defaultValue="American Samoa">American Samoa</option>
                                                            <option defaultValue="Andorra">Andorra</option>
                                                            <option defaultValue="Angola">Angola</option>
                                                            <option defaultValue="Anguilla">Anguilla</option>
                                                            <option defaultValue="Antigua & Barbuda">Antigua & Barbuda</option>
                                                            <option defaultValue="Argentina">Argentina</option>
                                                            <option defaultValue="Armenia">Armenia</option>
                                                            <option defaultValue="Aruba">Aruba</option>
                                                            <option defaultValue="Australia">Australia</option>
                                                            <option defaultValue="Austria">Austria</option>
                                                            <option defaultValue="Azerbaijan">Azerbaijan</option>
                                                            <option defaultValue="Bahamas">Bahamas</option>
                                                            <option defaultValue="Bahrain">Bahrain</option>
                                                            <option defaultValue="Barbados">Barbados</option>
                                                            <option defaultValue="Belarus">Belarus</option>
                                                            <option defaultValue="Belgium">Belgium</option>
                                                            <option defaultValue="Belize">Belize</option>
                                                            <option defaultValue="Benin">Benin</option>
                                                            <option defaultValue="Bermuda">Bermuda</option>
                                                            <option defaultValue="Bhutan">Bhutan</option>
                                                            <option defaultValue="Bolivia">Bolivia</option>
                                                            <option defaultValue="Bonaire">Bonaire</option>
                                                            <option defaultValue="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                                            <option defaultValue="Botswana">Botswana</option>
                                                            <option defaultValue="Brazil">Brazil</option>
                                                            <option defaultValue="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                            <option defaultValue="Brunei">Brunei</option>
                                                            <option defaultValue="Bulgaria">Bulgaria</option>
                                                            <option defaultValue="Burkina Faso">Burkina Faso</option>
                                                            <option defaultValue="Burundi">Burundi</option>
                                                            <option defaultValue="Cambodia">Cambodia</option>
                                                            <option defaultValue="Cameroon">Cameroon</option>
                                                            <option defaultValue="Canada">Canada</option>
                                                            <option defaultValue="Canary Islands">Canary Islands</option>
                                                            <option defaultValue="Cape Verde">Cape Verde</option>
                                                            <option defaultValue="Cayman Islands">Cayman Islands</option>
                                                            <option defaultValue="Central African Republic">Central African Republic</option>
                                                            <option defaultValue="Chad">Chad</option>
                                                            <option defaultValue="Channel Islands">Channel Islands</option>
                                                            <option defaultValue="Chile">Chile</option>
                                                            <option defaultValue="China">China</option>
                                                            <option defaultValue="Christmas Island">Christmas Island</option>
                                                            <option defaultValue="Cocos Island">Cocos Island</option>
                                                            <option defaultValue="Colombia">Colombia</option>
                                                            <option defaultValue="Comoros">Comoros</option>
                                                            <option defaultValue="Congo">Congo</option>
                                                            <option defaultValue="Cook Islands">Cook Islands</option>
                                                            <option defaultValue="Costa Rica">Costa Rica</option>
                                                            <option defaultValue="Cote DIvoire">Cote DIvoire</option>
                                                            <option defaultValue="Croatia">Croatia</option>
                                                            <option defaultValue="Cuba">Cuba</option>
                                                            <option defaultValue="Curaco">Curacao</option>
                                                            <option defaultValue="Cyprus">Cyprus</option>
                                                            <option defaultValue="Czech Republic">Czech Republic</option>
                                                            <option defaultValue="Denmark">Denmark</option>
                                                            <option defaultValue="Djibouti">Djibouti</option>
                                                            <option defaultValue="Dominica">Dominica</option>
                                                            <option defaultValue="Dominican Republic">Dominican Republic</option>
                                                            <option defaultValue="East Timor">East Timor</option>
                                                            <option defaultValue="Ecuador">Ecuador</option>
                                                            <option defaultValue="Egypt">Egypt</option>
                                                            <option defaultValue="El Salvador">El Salvador</option>
                                                            <option defaultValue="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option defaultValue="Eritrea">Eritrea</option>
                                                            <option defaultValue="Estonia">Estonia</option>
                                                            <option defaultValue="Ethiopia">Ethiopia</option>
                                                            <option defaultValue="Falkland Islands">Falkland Islands</option>
                                                            <option defaultValue="Faroe Islands">Faroe Islands</option>
                                                            <option defaultValue="Fiji">Fiji</option>
                                                            <option defaultValue="Finland">Finland</option>
                                                            <option defaultValue="France">France</option>
                                                            <option defaultValue="French Guiana">French Guiana</option>
                                                            <option defaultValue="French Polynesia">French Polynesia</option>
                                                            <option defaultValue="French Southern Ter">French Southern Ter</option>
                                                            <option defaultValue="Gabon">Gabon</option>
                                                            <option defaultValue="Gambia">Gambia</option>
                                                            <option defaultValue="Georgia">Georgia</option>
                                                            <option defaultValue="Germany">Germany</option>
                                                            <option defaultValue="Ghana">Ghana</option>
                                                            <option defaultValue="Gibraltar">Gibraltar</option>
                                                            <option defaultValue="Great Britain">Great Britain</option>
                                                            <option defaultValue="Greece">Greece</option>
                                                            <option defaultValue="Greenland">Greenland</option>
                                                            <option defaultValue="Grenada">Grenada</option>
                                                            <option defaultValue="Guadeloupe">Guadeloupe</option>
                                                            <option defaultValue="Guam">Guam</option>
                                                            <option defaultValue="Guatemala">Guatemala</option>
                                                            <option defaultValue="Guinea">Guinea</option>
                                                            <option defaultValue="Guyana">Guyana</option>
                                                            <option defaultValue="Haiti">Haiti</option>
                                                            <option defaultValue="Hawaii">Hawaii</option>
                                                            <option defaultValue="Honduras">Honduras</option>
                                                            <option defaultValue="Hong Kong">Hong Kong</option>
                                                            <option defaultValue="Hungary">Hungary</option>
                                                            <option defaultValue="Iceland">Iceland</option>
                                                            <option defaultValue="Indonesia">Indonesia</option>
                                                            <option defaultValue="India">India</option>
                                                            <option defaultValue="Iran">Iran</option>
                                                            <option defaultValue="Iraq">Iraq</option>
                                                            <option defaultValue="Ireland">Ireland</option>
                                                            <option defaultValue="Isle of Man">Isle of Man</option>
                                                            <option defaultValue="Israel">Israel</option>
                                                            <option defaultValue="Italy">Italy</option>
                                                            <option defaultValue="Jamaica">Jamaica</option>
                                                            <option defaultValue="Japan">Japan</option>
                                                            <option defaultValue="Jordan">Jordan</option>
                                                            <option defaultValue="Kazakhstan">Kazakhstan</option>
                                                            <option defaultValue="Kenya">Kenya</option>
                                                            <option defaultValue="Kiribati">Kiribati</option>
                                                            <option defaultValue="Korea North">Korea North</option>
                                                            <option defaultValue="Korea Sout">Korea South</option>
                                                            <option defaultValue="Kuwait">Kuwait</option>
                                                            <option defaultValue="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option defaultValue="Laos">Laos</option>
                                                            <option defaultValue="Latvia">Latvia</option>
                                                            <option defaultValue="Lebanon">Lebanon</option>
                                                            <option defaultValue="Lesotho">Lesotho</option>
                                                            <option defaultValue="Liberia">Liberia</option>
                                                            <option defaultValue="Libya">Libya</option>
                                                            <option defaultValue="Liechtenstein">Liechtenstein</option>
                                                            <option defaultValue="Lithuania">Lithuania</option>
                                                            <option defaultValue="Luxembourg">Luxembourg</option>
                                                            <option defaultValue="Macau">Macau</option>
                                                            <option defaultValue="Macedonia">Macedonia</option>
                                                            <option defaultValue="Madagascar">Madagascar</option>
                                                            <option defaultValue="Malaysia">Malaysia</option>
                                                            <option defaultValue="Malawi">Malawi</option>
                                                            <option defaultValue="Maldives">Maldives</option>
                                                            <option defaultValue="Mali">Mali</option>
                                                            <option defaultValue="Malta">Malta</option>
                                                            <option defaultValue="Marshall Islands">Marshall Islands</option>
                                                            <option defaultValue="Martinique">Martinique</option>
                                                            <option defaultValue="Mauritania">Mauritania</option>
                                                            <option defaultValue="Mauritius">Mauritius</option>
                                                            <option defaultValue="Mayotte">Mayotte</option>
                                                            <option defaultValue="Mexico">Mexico</option>
                                                            <option defaultValue="Midway Islands">Midway Islands</option>
                                                            <option defaultValue="Moldova">Moldova</option>
                                                            <option defaultValue="Monaco">Monaco</option>
                                                            <option defaultValue="Mongolia">Mongolia</option>
                                                            <option defaultValue="Montserrat">Montserrat</option>
                                                            <option defaultValue="Morocco">Morocco</option>
                                                            <option defaultValue="Mozambique">Mozambique</option>
                                                            <option defaultValue="Myanmar">Myanmar</option>
                                                            <option defaultValue="Nambia">Nambia</option>
                                                            <option defaultValue="Nauru">Nauru</option>
                                                            <option defaultValue="Nepal">Nepal</option>
                                                            <option defaultValue="Netherland Antilles">Netherland Antilles</option>
                                                            <option defaultValue="Netherlands">Netherlands (Holland, Europe)</option>
                                                            <option defaultValue="Nevis">Nevis</option>
                                                            <option defaultValue="New Caledonia">New Caledonia</option>
                                                            <option defaultValue="New Zealand">New Zealand</option>
                                                            <option defaultValue="Nicaragua">Nicaragua</option>
                                                            <option defaultValue="Niger">Niger</option>
                                                            <option defaultValue="Nigeria">Nigeria</option>
                                                            <option defaultValue="Niue">Niue</option>
                                                            <option defaultValue="Norfolk Island">Norfolk Island</option>
                                                            <option defaultValue="Norway">Norway</option>
                                                            <option defaultValue="Oman">Oman</option>
                                                            <option defaultValue="Pakistan">Pakistan</option>
                                                            <option defaultValue="Palau Island">Palau Island</option>
                                                            <option defaultValue="Palestine">Palestine</option>
                                                            <option defaultValue="Panama">Panama</option>
                                                            <option defaultValue="Papua New Guinea">Papua New Guinea</option>
                                                            <option defaultValue="Paraguay">Paraguay</option>
                                                            <option defaultValue="Peru">Peru</option>
                                                            <option defaultValue="Phillipines">Philippines</option>
                                                            <option defaultValue="Pitcairn Island">Pitcairn Island</option>
                                                            <option defaultValue="Poland">Poland</option>
                                                            <option defaultValue="Portugal">Portugal</option>
                                                            <option defaultValue="Puerto Rico">Puerto Rico</option>
                                                            <option defaultValue="Qatar">Qatar</option>
                                                            <option defaultValue="Republic of Montenegro">Republic of Montenegro</option>
                                                            <option defaultValue="Republic of Serbia">Republic of Serbia</option>
                                                            <option defaultValue="Reunion">Reunion</option>
                                                            <option defaultValue="Romania">Romania</option>
                                                            <option defaultValue="Russia">Russia</option>
                                                            <option defaultValue="Rwanda">Rwanda</option>
                                                            <option defaultValue="St Barthelemy">St Barthelemy</option>
                                                            <option defaultValue="St Eustatius">St Eustatius</option>
                                                            <option defaultValue="St Helena">St Helena</option>
                                                            <option defaultValue="St Kitts-Nevis">St Kitts-Nevis</option>
                                                            <option defaultValue="St Lucia">St Lucia</option>
                                                            <option defaultValue="St Maarten">St Maarten</option>
                                                            <option defaultValue="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                                            <option defaultValue="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                                            <option defaultValue="Saipan">Saipan</option>
                                                            <option defaultValue="Samoa">Samoa</option>
                                                            <option defaultValue="Samoa American">Samoa American</option>
                                                            <option defaultValue="San Marino">San Marino</option>
                                                            <option defaultValue="Sao Tome & Principe">Sao Tome & Principe</option>
                                                            <option defaultValue="Saudi Arabia">Saudi Arabia</option>
                                                            <option defaultValue="Senegal">Senegal</option>
                                                            <option defaultValue="Seychelles">Seychelles</option>
                                                            <option defaultValue="Sierra Leone">Sierra Leone</option>
                                                            <option defaultValue="Singapore">Singapore</option>
                                                            <option defaultValue="Slovakia">Slovakia</option>
                                                            <option defaultValue="Slovenia">Slovenia</option>
                                                            <option defaultValue="Solomon Islands">Solomon Islands</option>
                                                            <option defaultValue="Somalia">Somalia</option>
                                                            <option defaultValue="South Africa">South Africa</option>
                                                            <option defaultValue="Spain">Spain</option>
                                                            <option defaultValue="Sri Lanka">Sri Lanka</option>
                                                            <option defaultValue="Sudan">Sudan</option>
                                                            <option defaultValue="Suriname">Suriname</option>
                                                            <option defaultValue="Swaziland">Swaziland</option>
                                                            <option defaultValue="Sweden">Sweden</option>
                                                            <option defaultValue="Switzerland">Switzerland</option>
                                                            <option defaultValue="Syria">Syria</option>
                                                            <option defaultValue="Tahiti">Tahiti</option>
                                                            <option defaultValue="Taiwan">Taiwan</option>
                                                            <option defaultValue="Tajikistan">Tajikistan</option>
                                                            <option defaultValue="Tanzania">Tanzania</option>
                                                            <option defaultValue="Thailand">Thailand</option>
                                                            <option defaultValue="Togo">Togo</option>
                                                            <option defaultValue="Tokelau">Tokelau</option>
                                                            <option defaultValue="Tonga">Tonga</option>
                                                            <option defaultValue="Trinidad & Tobago">Trinidad & Tobago</option>
                                                            <option defaultValue="Tunisia">Tunisia</option>
                                                            <option defaultValue="Turkey">Turkey</option>
                                                            <option defaultValue="Turkmenistan">Turkmenistan</option>
                                                            <option defaultValue="Turks & Caicos Is">Turks & Caicos Is</option>
                                                            <option defaultValue="Tuvalu">Tuvalu</option>
                                                            <option defaultValue="Uganda">Uganda</option>
                                                            <option defaultValue="United Kingdom">United Kingdom</option>
                                                            <option defaultValue="Ukraine">Ukraine</option>
                                                            <option defaultValue="United Arab Erimates">United Arab Emirates</option>
                                                            <option defaultValue="United States of America">United States of America</option>
                                                            <option defaultValue="Uraguay">Uruguay</option>
                                                            <option defaultValue="Uzbekistan">Uzbekistan</option>
                                                            <option defaultValue="Vanuatu">Vanuatu</option>
                                                            <option defaultValue="Vatican City State">Vatican City State</option>
                                                            <option defaultValue="Venezuela">Venezuela</option>
                                                            <option defaultValue="Vietnam">Vietnam</option>
                                                            <option defaultValue="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                            <option defaultValue="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                            <option defaultValue="Wake Island">Wake Island</option>
                                                            <option defaultValue="Wallis & Futana Is">Wallis & Futana Is</option>
                                                            <option defaultValue="Yemen">Yemen</option>
                                                            <option defaultValue="Zaire">Zaire</option>
                                                            <option defaultValue="Zambia">Zambia</option>
                                                            <option defaultValue="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="default-btn reverse d-block"><span>{btnText}</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="banner__thumb banner__thumb--thumb1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                <img src={imgLink} alt={imgAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BannerOne;