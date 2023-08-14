import { Component, Fragment } from "react";
import FooterTwo from "../component/layout/footertwo";
import HeaderThree from "../component/layout/headerthree";
import AboutSectionFive from "../component/section/aboutfive";
import AboutSectionFour from "../component/section/aboutfour";
import BannerThree from "../component/section/bannerthree";
import MeetSectionTwo from "../component/section/meettwo";
import MemberSectionThree from "../component/section/memberthree";
import StorySection from "../component/section/story";
import WorkSection from "../component/section/work";
import WorkSectionTwo from "../component/section/worktwo";

class HomePageThree extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderThree />
				<BannerThree />
				<AboutSectionFour />
				<MemberSectionThree />
				<AboutSectionFive />
				<MeetSectionTwo />
				<WorkSection />
				<StorySection />
				<WorkSectionTwo />
				<FooterTwo />
            </Fragment>
        );
    }
}
 
export default HomePageThree;