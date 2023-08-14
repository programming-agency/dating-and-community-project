import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import SelectProduct from "../component/select/selectproduct";
import ActiveGroup from "../component/sidebar/group";
import ActiveMember from "../component/sidebar/member";
import ModalSearch from "../component/sidebar/modalsearch";

const name = "William Smith";
const activety = "Active 3 Days Ago";
const desc = "Challenges are whats make lifes interesting and overcoming them is what makes life meaningful";

let MemberInfo = [
    {
        imgUrl: 'assets/images/member/profile/01.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/01.jpg',
    },
    {
        imgUrl: 'assets/images/member/profile/02.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/02.jpg',
    },
    {
        imgUrl: 'assets/images/member/profile/03.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/03.jpg',
    },
    {
        imgUrl: 'assets/images/member/profile/04.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/04.jpg',
    },
    {
        imgUrl: 'assets/images/member/profile/05.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/05.jpg',
    },
    {
        imgUrl: 'assets/images/member/profile/06.jpg',
        imgAlt: 'Dating Thumb',
        imgLink: 'assets/images/member/profile/06.jpg',
    },
]

let GroupPageContentList = [
    {
        imgUrl: 'assets/images/group/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Be young, love life',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '12+',
        groupMemList: [
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
    },
    {
        imgUrl: 'assets/images/group/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Learn How To Love',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '14+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Love, health and...',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '30+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Ollya Dating Theme...',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '25+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Skip Relation Routine',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '18+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/06.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Gay Community',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '15+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/07.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Only Buddies',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/08.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Love Stories',
        desc: 'You become what you believe. –Oprah Winfrey',
        activety: '2 days ago',
        group: 'Public',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/04.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
]

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

let SiteLinkList = [
    {
        imgUrl: 'assets/images/site/01.png',
        imgAlt: 'Dating Thumb',
        title: 'Ollya Dating',
        activity: 'Active 5 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
    {
        imgUrl: 'assets/images/site/02.png',
        imgAlt: 'Dating Thumb',
        title: 'Ollya',
        activity: 'Active 2 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
    {
        imgUrl: 'assets/images/site/03.png',
        imgAlt: 'Dating Thumb',
        title: 'Ollya Dating',
        activity: 'Active 5 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
    {
        imgUrl: 'assets/images/site/04.png',
        imgAlt: 'Dating Thumb',
        title: 'Ollya',
        activity: 'Active 2 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
    {
        imgUrl: 'assets/images/site/05.png',
        imgAlt: 'Dating Thumb',
        title: 'Ollya Dating',
        activity: 'Active 5 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
    {
        imgUrl: 'assets/images/site/06.png',
        imgAlt: 'Dating Thumb',
        title: 'Dating',
        activity: 'Active 2 months ago',
        btnText: 'Visit Site',
        btnLink: '#',
    },
]

let ActiveGroupsList = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rajib Raj',
        titleSpan: 'joined the group',
        activity: '28 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Angel Mili',
        titleSpan: 'joined the group',
        activity: '28 days ago',
    },
]

let ActiveFriendList = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rajib Raj',
        title2: 'Angel Mili',
        titleSpan: 'became Friend with',
        activity: '2 minite ago',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Angel Mili',
        title2: 'Sajahan Sagor',
        titleSpan: 'joined the group',
        activity: '5 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Somrat Islam',
        title2: 'Rasmi Rahani',
        titleSpan: 'joined the group',
        activity: 'Active Now',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Umme Nishat',
        title2: 'Rajib Raj',
        titleSpan: 'joined the group',
        activity: '2 days ago',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Rassel Hossan',
        title2: 'Ryhan Kabir',
        titleSpan: 'joined the group',
        activity: '28 minite ago',
    },
]

class MemberDetails extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Member Single Page'} curPage={'Member Single'} />
                <div className="group group--single padding-bottom">
                    <div className="group__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 d-none d-xl-block"></div>
                                <div className="col-xl-9">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="gt1-tab" data-bs-toggle="tab" data-bs-target="#gt1" type="button" role="tab" aria-controls="gt1" aria-selected="true"><i className="fa-solid fa-house"></i> Activity</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt2-tab" data-bs-toggle="tab" data-bs-target="#gt2" type="button" role="tab" aria-controls="gt2" aria-selected="false"><i className="fa-solid fa-users"></i> Profile <span>30</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt3-tab" data-bs-toggle="tab" data-bs-target="#gt3" type="button" role="tab" aria-controls="gt3" aria-selected="false"><i className="fa-solid fa-video"></i> Sites <span>06</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt4-tab" data-bs-toggle="tab" data-bs-target="#gt4" type="button" role="tab" aria-controls="gt4" aria-selected="false"><i className="fa-solid fa-users"></i> Friends <span>16</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt5-tab" data-bs-toggle="tab" data-bs-target="#gt5" type="button" role="tab" aria-controls="gt5" aria-selected="false"><i className="fa-solid fa-layer-group"></i> Groups <span>08</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="gt6-tab" data-bs-toggle="tab" data-bs-target="#gt6" type="button" role="tab" aria-controls="gt6" aria-selected="false"><i className="fa-solid fa-photo-film"></i> Media <span>06</span></button>
                                        </li>
                                    </ul>
                                </div>
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
                                                <div className="group__bottom--head group__bottom--activity bg-white mb-4 border-0">
                                                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="Personal-tab" data-bs-toggle="tab" data-bs-target="#Personal" type="button" role="tab" aria-controls="Personal" aria-selected="true">Personal</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="Mentions-tab" data-bs-toggle="tab" data-bs-target="#Mentions" type="button" role="tab" aria-controls="Mentions" aria-selected="false">Mentions</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="Favorites-tab" data-bs-toggle="tab" data-bs-target="#Favorites" type="button" role="tab" aria-controls="Favorites" aria-selected="false">Favorites</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="Friends-tab" data-bs-toggle="tab" data-bs-target="#Friends" type="button" role="tab" aria-controls="Friends" aria-selected="false">Friends</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="Groups-tab" data-bs-toggle="tab" data-bs-target="#Groups" type="button" role="tab" aria-controls="Groups" aria-selected="false">Groups</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="group__bottom--area group__bottom--memberactivity">
                                                    <div className="group__bottom--body">
                                                        <div className="group__bottom--allmedia">
                                                            <div className="media-wrapper">
                                                                <div className="tab-content" id="myTabContent2">
                                                                    <div className="tab-pane fade show active" id="Personal"
                                                                        role="tabpanel" aria-labelledby="Personal-tab">
                                                                        <div className="create-post mb-4">
                                                                            <div className="lab-inner">
                                                                                <div className="lab-thumb">
                                                                                    <div className="thumb-inner">
                                                                                        <div className="thumb-img">
                                                                                            <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                                                                                        </div>
                                                                                        <div className="thumb-content">
                                                                                            <h6><a href="#"> William Smith</a></h6>
                                                                                            <div className="custom-select">
                                                                                                <select>
                                                                                                    <option value="1"> Public</option>
                                                                                                    <option value="2"> Private</option>
                                                                                                    <option value="3"> Friends</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lab-content">
                                                                                    <form action="#" className="post-form">
                                                                                        <input type="text" placeholder="Whats on your mind. William?" />
                                                                                        <div className="content-type">
                                                                                            <ul className="content-list">
                                                                                                <li className="text"><a href="#"><i className="fa-solid fa-pen-to-square"></i>Text </a></li>
                                                                                                <li className="image-video">
                                                                                                    <div className="file-btn"><i className="fa-solid fa-camera"></i>Photo/Videos</div>
                                                                                                    <input type="file" />
                                                                                                </li>
                                                                                                <li className="attach-file">
                                                                                                    <div className="file-btn"><i className="fa-solid fa-link"></i>Attach File</div>
                                                                                                    <input type="file" />
                                                                                                </li>
                                                                                                <li className="post-submit">
                                                                                                    <input type="submit" value="Post" className="default-btn" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-4">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i className="icofont-world"></i> Public</li>
                                                                                                <li className="post-time">6 Mintues Ago</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info create empowerment before with client centered bandwdth Credibly pontficate interoperable leadership skills ands B2B data awesome Continually whiteboard ands B2B data awesome Continually whiteboard</p>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="fa-solid fa-thumbs-up"></i> <i className="fa-solid fa-heart"></i> <i className="fa-solid fa-face-laugh"></i> <span>Julia, Petrova and 306 like this</span></a></p>
                                                                                    <p><a href="#">136 Comments</a></p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-thumbs-up"></i>Like</a> </li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-comment"></i>Comment</a></li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-share-nodes"></i>Share</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="post-item mb-4">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i className="icofont-world"></i> Public</li>
                                                                                                <li className="post-time">6 Mintues Ago </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info create empowerment before with client centered bandwdth Credibly pontficate interoperable leadership skills ands B2B data awesome Continually whiteboard ands B2B data awesome Continually whiteboard</p>
                                                                                    <div className="post-desc-img">
                                                                                        <img src="assets/images/group/single/01.jpg" alt="dating thumb" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="fa-solid fa-thumbs-up"></i> <i className="fa-solid fa-heart"></i> <i className="fa-solid fa-face-laugh"></i><span>Julia, Petrova and 306 like this</span></a></p>
                                                                                    <p><a href="#">136 Comments</a></p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-thumbs-up"></i>Like</a> </li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-comment"></i>Comment</a></li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-share-nodes"></i> Share </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-4">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/member/profile/profile.jpg" alt="datting thumb" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i className="icofont-world"></i> Public</li>
                                                                                                <li className="post-time">6 Mintues Ago </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info create empowerment before with client centered bandwdth Credibly pontficate interoperable leadership skills ands B2B data awesome Continually whiteboard ands B2B data awesome Continually whiteboard</p>
                                                                                    <div className="post-desc-img">
                                                                                        <div className="row g-3">
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/group/single/01.jpg" alt="dating thumb" />
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/group/single/02.jpg" alt="dating thumb" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="fa-solid fa-thumbs-up"></i> <i className="fa-solid fa-heart"></i> <i className="fa-solid fa-face-laugh"></i><span>Julia, Petrova and 306 like this</span></a></p>
                                                                                    <p><a href="#">136 Comments</a></p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-thumbs-up"></i>Like</a> </li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-comment"></i>Comment</a></li>
                                                                                        <li className="react"><a href="#"><i className="fa-solid fa-share-nodes"></i> Share </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-center mt-4">
                                                                            <a href="#" className="default-btn"><span>Load More Post</span></a>
                                                                        </div>
                                                                    </div>
                
                                                                    <div className="tab-pane fade" id="Mentions" role="tabpanel" aria-labelledby="Mentions-tab">
                                                                        <div className="post-item">
                                                                            <div className="post-content">
                                                                                <div className="post-author pb-3">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/member/home2/01.jpg" alt="datting thumb" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">David Baecker</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i className="icofont-world"></i> Public</li>
                                                                                                <li className="post-time">46 Mintues Ago</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className="post-description ps-5">
                                                                                    <p className="ms-5 ps-2">Hello @<a href="#">Sara Hartmann</a></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="tab-pane fade" id="Favorites" role="tabpanel" aria-labelledby="Favorites-tab">
                                                                        <div className="post-item mb-4">
                                                                            <div className="post-content p-4">
                                                                                <p className="mb-0">Sorry, there was no activity found. Please try a different filter.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="tab-pane fade" id="Friends" role="tabpanel" aria-labelledby="Friends-tab">
                                                                        {ActiveFriendList.map((val, i) => (
                                                                            <div className="activity__item mb-3" key={i}>
                                                                                <div className="activity__inner bg-white">
                                                                                    <div className="activity__thumb">
                                                                                        <Link to="/member-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                    </div>
                                                                                    <div className="activity__content">
                                                                                        <h5><Link to="/member-single">{val.title} </Link><span>{val.titleSpan} <Link to="/member-single"> {val.title2}</Link></span></h5>
                                                                                        <p>{val.activity}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    
                                                                    <div className="tab-pane fade" id="Groups" role="tabpanel" aria-labelledby="Groups-tab">
                                                                        {ActiveGroupsList.map((val, i) => (
                                                                            <div className="activity__item mb-3" key={i}>
                                                                                <div className="activity__inner bg-white">
                                                                                    <div className="activity__thumb">
                                                                                        <Link to="/member-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                    </div>
                                                                                    <div className="activity__content">
                                                                                        <h5><Link to="/member-single">{val.title} </Link><span>{val.titleSpan}</span></h5>
                                                                                        <p>{val.activity}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt2" role="tabpanel" aria-labelledby="gt2-tab">
                                                <div className="info">
                                                    <div className="info-card mb-4">
                                                        <div className="info-card-title">
                                                            <h6>Base Info</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <ul className="info-list">
                                                                <li>
                                                                    <p className="info-name">Name</p>
                                                                    <p className="info-details">William Smith</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">I'm a</p>
                                                                    <p className="info-details">Woman</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Loking for a</p>
                                                                    <p className="info-details">Men</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Marital Status</p>
                                                                    <p className="info-details">Single</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Age</p>
                                                                    <p className="info-details">36</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Date of Birth</p>
                                                                    <p className="info-details">27-02-1996</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Address</p>
                                                                    <p className="info-details">Streop Rd, Peosur, Inphodux,
                                                                        USA.</p>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="info-card mb-4">
                                                        <div className="info-card-title">
                                                            <h6>Myself Summary</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <p>Collaboratively innovate compelling mindshare after prospective partnership Competently sereiz long-term high-impact internal or "organic" sources vias user friendly strategic themesr areas creat Dramatically coordinate premium partnerships rather than standards compliant technologies ernd Dramaticaly matrix ethical collaboration and idea-sharing through opensour methodolog and Intrinsicly grow collaborative platforms vis-a-vis effective scenarios. The energistically strategize cost effective ideas before the worke unde.</p>
                                                        </div>
                                                    </div>

                                                    <div className="info-card mb-4">
                                                        <div className="info-card-title">
                                                            <h6>Looking For</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <ul className="info-list">
                                                                <li>
                                                                    <p className="info-name">I'm looking for</p>
                                                                    <p className="info-details">I want a funny person</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Whatever I like</p>
                                                                    <p className="info-details">I like to travel a lot</p>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                    <div className="info-card mb-4">
                                                        <div className="info-card-title">
                                                            <h6>Lifestyle</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <ul className="info-list">
                                                                <li>
                                                                    <p className="info-name">Interest</p>
                                                                    <p className="info-details">Dogs,Cats</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Favorite vocations</p>
                                                                    <p className="info-details">Maldives, Bangladesh</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Looking for</p>
                                                                    <p className="info-details">Serious Relationshiop,Affair</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Smoking</p>
                                                                    <p className="info-details">Casual Smoker</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Language</p>
                                                                    <p className="info-details">English, French, Italian</p>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                    <div className="info-card">
                                                        <div className="info-card-title">
                                                            <h6>Physical info</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <ul className="info-list">
                                                                <li>
                                                                    <p className="info-name">Height</p>
                                                                    <p className="info-details">5'8 ft</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Weight</p>
                                                                    <p className="info-details">72 kg</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Hair Color</p>
                                                                    <p className="info-details">Black</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Eye Color</p>
                                                                    <p className="info-details">Brown</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Body Type</p>
                                                                    <p className="info-details">Tall</p>
                                                                </li>
                                                                <li>
                                                                    <p className="info-name">Ethnicity</p>
                                                                    <p className="info-details">Middle Eastern</p>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt3" role="tabpanel" aria-labelledby="gt3-tab">
                                                <div className="site">
                                                    <div className="info-card mb-4">
                                                        <div className="info-card-title">
                                                            <h6>Site Link</h6>
                                                        </div>
                                                        <div className="info-card-content">
                                                            <ul className="info-list">
                                                                {SiteLinkList.map((val, i) => (
                                                                    <li key={i}>
                                                                        <div className="info-details">
                                                                            <div className="id-left">
                                                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                            </div>
                                                                            <div className="id-right">
                                                                                <a href={val.btnLink} target="_blank"><h5>{val.title}</h5></a>
                                                                                <p>{val.activity}</p>
                                                                            </div>
                                                                        </div>
                                                                        <a href={val.btnLink} className="default-btn" target="_blank"><span>{val.btnText}</span></a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="info-card-title info-card-pagination">
                                                            <p>Viewing 1 - 2 of 2 sites</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt4" role="tabpanel" aria-labelledby="gt4-tab">
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

                                            <div className="tab-pane fade" id="gt5" role="tabpanel" aria-labelledby="gt5-tab">
                                                <div className="group__bottom--area">
                                                    <div className="group__bottom--head">
                                                        <div className="left">
                                                            <form action="#">
                                                                <input type="text" name="search" placeholder="search" className="" />
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
                                                    <div className="group__bottom--body bg-white">
                                                        <div className="group__bottom--group">
                                                            <div className="row g-3 justify-content-center mx-12-none row-cols-lg-2 row-cols-sm-2 row-cols-1">
                                                                {GroupPageContentList.map((val, i) => (
                                                                    <div className="col" key={i}>
                                                                        <div className="story__item style2 story--theme-color">
                                                                            <div className="story__inner">
                                                                                <div className="story__thumb position-relative">
                                                                                    <Link to="/group-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                    <span className="member__activity member__activity--ofline">{val.activety}</span>
                                                                                </div>
                                                                                <div className="story__content px-0 pb-0">
                                                                                    <Link to="/group-single"><h4>{val.title}</h4></Link>
                                                                                    <p>{val.desc}</p>
                                                                                    <div className="story__content--author justify-content-between border-top pt-3">
                                                                                        <div className="story__content--content">
                                                                                            <p><i className="fa-solid fa-earth-africa"></i> {val.group}</p>
                                                                                        </div>
                                                                                        <ul className="img-stack">
                                                                                            {val.groupMemList.map((val, i) => (
                                                                                                <li key={i}>
                                                                                                    <a href="#">
                                                                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                                                                        <div className="time-tooltip">
                                                                                                            <div className="time-tooltip-holder">
                                                                                                                <span className="tooltip-info">{val.name}</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                </li>
                                                                                            ))}
                                                                                            <li className="bg-theme">
                                                                                                <a href="#">
                                                                                                    {val.moreMember}
                                                                                                    <div className="time-tooltip">
                                                                                                        <div className="time-tooltip-holder">
                                                                                                            <span className="tooltip-info">More</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="text-center mt-5">
                                                                <a href="#" className="default-btn"><i className="fa-solid fa-spinner"></i> Load More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="gt6" role="tabpanel" aria-labelledby="gt6-tab">
                                                <div className="group__bottom--body bg-white">
                                                    <div className="group__bottom--allmedia">
                                                        <div className="media-wrapper">
                                                            <ul className="nav nav-tabs" id="myTab3" role="tablist">
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
                                                            <div className="tab-content" id="myTabContent3">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 order-xl-0">
                                    <div className="group__bottom--center">
                                        <div className="story__item style2">
                                            <div className="story__inner">
                                                <div className="story__thumb position-relative">
                                                    <img src="assets/images/member/profile/profile.jpg" alt="dating thumb" />
                                                </div>
                                                <div className="story__content px-0 pb-0">
                                                    <h4>{name}</h4>
                                                    <div className="story__content--content mb-2 pb-3">
                                                        <p><i className="fa-solid fa-clock"></i> {activety}</p>
                                                    </div>
                                                    <p className="mb-2">{desc}</p>
                                                    <div className="story__content--author mt-3 pb-2">
                                                        <h6 className="d-block w-100 mb-3">{name} Photos</h6>
                                                        <div className="row g-2">
                                                            {MemberInfo.map((val, i) => (
                                                                <div className="col-4" key={i}>
                                                                    <a href={`${val.imgLink}`} target="_blank"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                                                </div>
                                                            ))}
                                                        </div>
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
 
export default MemberDetails;