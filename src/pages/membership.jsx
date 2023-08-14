import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";

const title = "Membership Levels";
const subtitle = "Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.";

let MembershipList = [
    {
        daycount: '7 Day Free Trial',
        perMonth: '$15.00 Now And Then $30.00 Per Month.',
        price: 'Free',
        btnText: 'Select Plan',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: 'Bronze',
        perMonth: '$15.00 Now And Then $30.00 Per Month.',
        price: '$15.00',
        btnText: 'Select Plan',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: 'Silver',
        perMonth: '$15.00 Now And Then $30.00 Per Month.',
        price: '$20.00',
        btnText: 'Select Plan',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: 'Gold',
        perMonth: '$15.00 Now And Then $30.00 Per Month.',
        price: '$30.00',
        btnText: 'Select Plan',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Add Media To Your Profile',
            },
        ]
    },
]

class MembershipPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Membership Levels'} curPage={'Membership'} />
                <div className="membership padding-top padding-bottom">
                    <div className="container">
                        <div className="section__header style-2 text-center">
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                        <div className="section__wrapper">
                            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                {MembershipList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="membership__item">
                                            <div className="membership__inner">
                                                <div className="membership__head">
                                                    <h4>{val.daycount}</h4>
                                                    <p>{val.perMonth}</p>
                                                </div>
                                                <div className="membership__body">
                                                    <h4>{val.price}</h4>
                                                    <ul>
                                                        {val.faciList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i> <span>{val.text}</span></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="membership__footer">
                                                    <Link to="/login" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default MembershipPage;