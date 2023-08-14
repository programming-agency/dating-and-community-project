import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from './component/layout/scrolltop';
import AboutPage from "./pages/about";
import ActivityPage from "./pages/activity";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import ComingSoonPage from "./pages/comingsoon";
import CommunityPage from "./pages/community";
import ContactUs from "./pages/contact";
import ErrorPage from "./pages/errorpage";
import GroupPage from "./pages/group";
import GroupDetails from "./pages/groupsingle";
import HomePage from "./pages/home";
import HomePageThree from "./pages/homethree";
import HomePageTwo from "./pages/hometwo";
import LogIn from "./pages/login";
import MemberDetails from "./pages/member-single";
import MembersPage from "./pages/members";
import MembershipPage from "./pages/membership";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import Policy from "./pages/policy";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="index-2" element={<HomePageTwo />} />
					<Route path="index-3" element={<HomePageThree />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="membership" element={<MembershipPage />} />
					<Route path="comingsoon" element={<ComingSoonPage />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="community" element={<CommunityPage />} />
					<Route path="group" element={<GroupPage />} />
					<Route path="group-single" element={<GroupDetails />} />
					<Route path="members" element={<MembersPage />} />
					<Route path="activity" element={<ActivityPage />} />
					<Route path="shop" element={<ShopPage />} />
					<Route path="shop-single" element={<ShopDetails />} />
					<Route path="shop-cart" element={<ShopCart />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="blog-2" element={<BlogPageTwo />} />
					<Route path="blog-single" element={<BlogDetails />} />
					<Route path="contact" element={<ContactUs />} />
					<Route path="register" element={<SignUp />} />
					<Route path="login" element={<LogIn />} />
					<Route path="member-single" element={<MemberDetails />} />
					<Route path="policy" element={<Policy />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
