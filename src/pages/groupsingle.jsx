import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import SelectPost from "../component/select/selectpost";
import SelectProduct from "../component/select/selectproduct";
import ActiveGroup from "../component/sidebar/group";
import ActiveMember from "../component/sidebar/member";
import ModalSearch from "../component/sidebar/modalsearch";

const title = 'Be young, love life';
const desc = 'Challenges are whats make lifes interesting and overcoming them is what makes life meaningful.';
const groupQuality = 'Public Group';
const adminBy = 'Joshua J. Marine';
const adminTitle = 'Admins & moderators';
const moreCount = "5+";


let FriendList = [
    {
        imgUrl: 'assets/images/member/profile/profile.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Michele Storm',
        age: '32 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/02.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Ryhan Kabir',
        age: '28 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/03.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Umes Zadov',
        age: '24 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/03.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Subrina Kabir',
        age: '22 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/04.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Rafsan Hossin',
        age: '18 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/04.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Onty Islam',
        age: '28 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/05.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Shakibul Hassan',
        age: '23 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/05.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Rasmi Rahni',
        age: '21 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/06.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Somrat Islam',
        age: '32 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/06.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Soily Soshi',
        age: '27 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/07.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Sajahan Sagor',
        age: '25 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/07.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Umme Nishat',
        age: '20 Years old',
    },
    {
        imgUrl: 'assets/images/member/male/08.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Andro Rassel',
        age: '26 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/08.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Zinat Zaara',
        age: '16 Years old',
    },
    {
        imgUrl: 'assets/images/member/female/01.jpg',
        imgAlt: 'Dating Thumb',
        activity: 'Online',
        name: 'Angel Mili',
        age: '27 Years old',
    },
]

let groupMemList = [
    {
        imgUrl: 'assets/images/group/icon/01.png',
        imgAlt: 'Dating Thumb',
        name: 'Klaus Klug',
    },
    {
        imgUrl: 'assets/images/group/icon/02.png',
        imgAlt: 'Dating Thumb',
        name: 'Mary C. Shen',
    },
    {
        imgUrl: 'assets/images/group/icon/03.png',
        imgAlt: 'Dating Thumb',
        name: 'Lucas Vogler',
    },
    {
        imgUrl: 'assets/images/group/icon/04.png',
        imgAlt: 'Dating Thumb',
        name: 'Manuela Moench',
    },
    {
        imgUrl: 'assets/images/group/icon/05.png',
        imgAlt: 'Dating Thumb',
        name: 'Matthias Propst',
    },
]


class GroupDetails extends Component {
    render() { 
        return (
            <Fragment >
                <HeaderTwo />
                <PageHeader title={'Group Single Page'} curPage={'Group Details'} />
                <div className="group group--single padding-bottom">
                    <div className="group__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 d-none d-xl-block"></div>
                                <div className="col-xl-6">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="gt1-tab" data-bs-toggle="tab" data-bs-target="#gt1" type="button" role="tab" aria-controls="gt1" aria-selected="true"><i className="fa-solid fa-house"></i> Home</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt2-tab" data-bs-toggle="tab" data-bs-target="#gt2" type="button" role="tab" aria-controls="gt2" aria-selected="false"><i className="fa-solid fa-users"></i> Members <span>30</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt3-tab" data-bs-toggle="tab" data-bs-target="#gt3" type="button" role="tab" aria-controls="gt3" aria-selected="false"><i className="fa-solid fa-video"></i> Media <span>06</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt4-tab" data-bs-toggle="tab" data-bs-target="#gt4" type="button" role="tab" aria-controls="gt4" aria-selected="false"><i className="fa-solid fa-file"></i> Forums <span>06</span></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 d-none d-xl-block"></div>
                            </div>
                        </div>
                    </div>
                    <div className="group__bottom">
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-xl-6 order-xl-1">
                                    <div className="group__bottom--left">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="gt1" role="tabpanel" aria-labelledby="gt1-tab">
                                                <div className="group__bottom--area">
                                                    <div className="group__bottom--head">
                                                        <div className="left"><i className="fa-solid fa-rss"></i> RSS</div>
                                                        <div className="right">
                                                            Show :
                                                            <div className="banner__inputlist">
                                                                <SelectPost select={'allpost'} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="group__bottom--body">
                                                        <ul>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/01.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Theodore Doe <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                        <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/02.jpg" alt="member-img" />
                                                                            <span className="member__activity member__activity--ofline"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Sarah Schuster <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <div className="bottom__thumb">
                                                                        <img src="assets/images/group/single/01.jpg" alt="dating thumb" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/03.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Leon Schmid <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                        <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/04.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Mili Jan <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                        <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/05.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Peter Lange <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                        <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/06.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Birgit Neudorf <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                        <p>Many a man’s reputation would not know his character if they met onthe street. (Elbert Hubbard)</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="top">
                                                                    <div className="left member--style2">
                                                                        <div className="member__thumb">
                                                                            <img src="assets/images/member/home2/07.jpg" alt="member-img" />
                                                                            <span className="member__activity"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                        <Link to="/group-single"><h6>Ralf Hertzog <span>posted an update in the group</span></h6></Link>
                                                                        <span>4 years ago</span>
                                                                    </div>
                                                                </div>
                                                                <div className="bottom">
                                                                    <div className="bottom__thumb">
                                                                        <img src="assets/images/group/single/02.jpg" alt="dating thumb" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="text-center mt-5">
                                                            <a href="#" className="default-btn"><span><i className="fa-solid fa-spinner"></i> Load More</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt2" role="tabpanel" aria-labelledby="gt2-tab">
                                                <div className="group__bottom--area">
                                                    <div className="group__bottom--head">
                                                        <div className="left">
                                                            <form action="#">
                                                                <input type="text" name="search" placeholder="search" />
                                                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                            </form>
                                                        </div>
                                                        <div className="right">
                                                            Orader By:
                                                            <div className="banner__inputlist">
                                                                <SelectProduct select={'Newest'} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="group__bottom--body">
                                                        <div className="member">
                                                            <div className="row g-3 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                                                {FriendList.map((val, i) => (
                                                                    <div className="col" key={i}>
                                                                        <div className="member__item w-100">
                                                                            <div className="member__inner m-0">
                                                                                <div className="member__thumb">
                                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                                    <span className="member__activity">{val.activity}</span>
                                                                                </div>
                                                                                <div className="member__content">
                                                                                    <Link to="/member-single"><h6>{val.name}</h6></Link>
                                                                                    <p>{val.age} <i className="fa-solid fa-mars"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="text-center mt-5">
                                                            <a href="#" className="default-btn"><span><i className="fa-solid fa-spinner"></i> Load More</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt3" role="tabpanel" aria-labelledby="gt3-tab">
                                                <div className="group__bottom--body bg-white">
                                                    <div className="group__bottom--allmedia">
                                                        <div className="media-wrapper">
                                                            <ul className="nav nav-tabs" id="myTab33" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" id="all-media-tab" data-bs-toggle="tab" data-bs-target="#all-media" type="button" role="tab" aria-controls="all-media" aria-selected="true"><i className="fa-solid fa-table-cells-large"></i> All <span>12</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="album-tab" data-bs-toggle="tab" data-bs-target="#album" type="button" role="tab" aria-controls="album" aria-selected="false"><i className="fa-solid fa-camera"></i> Albums <span>4</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="photos-media-tab" data-bs-toggle="tab" data-bs-target="#photos-media" type="button" role="tab" aria-controls="photos-media" aria-selected="false"><i className="fa-solid fa-image"></i> Photos <span>4</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false"><i className="fa-solid fa-video"></i> Videos <span>4</span></button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music" type="button" role="tab" aria-controls="music" aria-selected="false"><i className="fa-solid fa-music"></i> Music <span>0</span></button>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content" id="myTabContent33">
                                                                <div className="tab-pane fade show active" id="all-media"
                                                                    role="tabpanel" aria-labelledby="all-media-tab">
                                                                    <div className="media-content">
                                                                        <ul className="media-upload">
                                                                            <li className="upload-now">
                                                                                <div className="custom-upload">
                                                                                    <div className="file-btn"><i className="fa-solid fa-upload"></i> Upload</div>
                                                                                    <input type="file" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/01.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/01.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/02.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/02.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/03.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/03.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/04.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/04.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/05.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/05.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/06.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/06.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/07.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/07.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/08.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/08.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/09.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/09.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/10.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/10.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/11.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/11.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/12.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/12.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center mt-5">
                                                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner"></i> Load More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="tab-pane fade" id="album" role="tabpanel" aria-labelledby="album-tab">
                                                                    <div className="media-content">
                                                                        <ul className="media-upload">
                                                                            <li className="upload-now">
                                                                                <div className="custom-upload">
                                                                                    <div className="file-btn"><i className="fa-solid fa-upload"></i> Upload</div>
                                                                                    <input type="file" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/02.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/02.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/06.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/06.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/10.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/10.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb albam-thumb">
                                                                                    <img src="assets/images/allmedia/12.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/12.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="text-center mt-5">
                                                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner"></i> Load More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="tab-pane fade" id="photos-media" role="tabpanel" aria-labelledby="photos-media-tab">
                                                                    <div className="media-content">
                                                                        <ul className="media-upload">
                                                                            <li className="upload-now">
                                                                                <div className="custom-upload">
                                                                                    <div className="file-btn"><i className="fa-solid fa-upload"></i> Upload</div>
                                                                                    <input type="file" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/03.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/03.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/04.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/04.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/08.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/08.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb">
                                                                                    <img src="assets/images/allmedia/09.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/09.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-image"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="text-center mt-5">
                                                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner"></i> Load More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                                                                    <div className="media-content">
                                                                        <ul className="media-upload">
                                                                            <li className="upload-now">
                                                                                <div className="custom-upload">
                                                                                    <div className="file-btn"><i className="fa-solid fa-upload"></i> Upload</div>
                                                                                    <input type="file" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/01.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/01.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/05.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/05.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/07.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/07.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="media-thumb video-thumb">
                                                                                    <img src="assets/images/allmedia/11.jpg" alt="dating thumb" />
                                                                                    <a href="assets/images/allmedia/11.jpg" target="_blank" className="icon">
                                                                                        <i className="fa-solid fa-circle-play"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="text-center mt-5">
                                                                            <a href="#" className="default-btn"><i className="fa-solid fa-spinner"></i> Load More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">
                                                                    <div className="media-content">
                                                                        <ul className="media-upload">
                                                                            <li className="upload-now">
                                                                                <div className="custom-upload">
                                                                                    <div className="file-btn"><i className="fa-solid fa-upload"></i> Upload</div>
                                                                                    <input type="file" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <p><i className="icofont-worried"></i> Sorry !!
                                                                                    There's no media found for the
                                                                                    request !! </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt4" role="tabpanel" aria-labelledby="gt4-tab">
                                                <div className="group__bottom--body bg-white">
                                                    <h4>Forums</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 order-xl-0">
                                    <div className="group__bottom--center">
                                        <div className="story__item style2">
                                            <div className="story__inner">
                                                <div className="story__thumb position-relative">
                                                    <img src="assets/images/group/01.jpg" alt="dating thumb" />
                                                </div>
                                                <div className="story__content px-0 pb-0">
                                                    <h4>{title}</h4>
                                                    <div className="story__content--content pb-3">
                                                        <p><i className="fa-solid fa-earth-africa"></i> {groupQuality}</p>
                                                    </div>
                                                    <p className="mb-2">{desc}</p>
                                                    <i>{adminBy}</i>
                                                    <div className="story__content--author mt-3 pb-2">
                                                        <h6>{adminTitle}</h6>
                                                        <ul className="img-stack">
                                                            {groupMemList.map((val, i) => (
                                                                <li key={i}>
                                                                    <Link to="/member-single">
                                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                        <div className="time-tooltip">
                                                                            <div className="time-tooltip-holder">
                                                                                <span className="tooltip-info">{val.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                            <li className="bg-theme">
                                                                <Link to="/member-single">
                                                                    {moreCount}
                                                                    <div className="time-tooltip">
                                                                        <div className="time-tooltip-holder">
                                                                            <span className="tooltip-info">More</span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 order-xl-2">
                                    <div className="group__bottom--right">
                                        <ModalSearch />
                                        <ActiveMember />
                                        <ActiveGroup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default GroupDetails;