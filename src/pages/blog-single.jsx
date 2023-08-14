import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import Author from "../component/section/author";
import CommentForm from "../component/section/commentform";
import Comments from "../component/section/comments";
import Archive from "../component/sidebar/archive";
import CategorieTwo from "../component/sidebar/categorietwo";
import Instagram from "../component/sidebar/instagram";
import RecentPost from "../component/sidebar/recentpost";
import SearchBar from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";


class BlogDetails extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'Blog Details'} curPage={'Blog Details'} />
                <div className="blog blog--style2 padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-9 col-12">
                                    <article>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <img src="assets/images/blog/single/01.jpg" alt="blog" />
                                                </div>
                                                <div className="blog__content">
                                                    <h2>Serenity hassir taken posseson of mying entire</h2>
                                                    <ul className="blog__date">
                                                        <li><span><i className="fa-solid fa-calendar-days"></i>January 01, 2022 10:59 am </span></li>
                                                        <li><span><i className="fa-solid fa-user"></i><a href="#">Rajib Raj</a></span></li>
                                                        <li><span><i className="fa-solid fa-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                                                    <blockquote className="single-quote mb-4">
                                                        <div className="quotes">
                                                            Dynamicaly recaptiuaze distribute technologies wherease 
                                                            turnkey channels and onotonec provide aces to resource
                                                            levelng expert vias worldwide deve in rabes uoliticly extend 
                                                            aserser are diverse vortals. 
                                                            <span>...Melissa Hunter</span>
                                                        </div>
                                                    </blockquote>
                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                                                    <div className="blog__thumb mb-4"><img src="assets/images/blog/single/02.jpg" alt="blog-img" />
                                                    </div>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="blog__thumb mb-4">
                                                        <img src="assets/images/blog/single/03.jpg" alt="blog" />
                                                        <a href="https://www.youtube.com/embed/U9O8G5AreXE" className="play-btn" target="_blank">
                                                            <i className="fa-solid fa-play"></i>
                                                            <span className="pluse_2"></span>
                                                        </a>
                                                    </div>
                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="tags-area">
                                                        <ul className="tags lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#">Charity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="active">NoneProfit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Admission</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Exams</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="share lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="dribble"><i className="fa-brands fa-dribbble"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="google"><i className="fa-brands fa-google"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="article-pagination">
                                            <div className="prev-article">
                                                <a href="#"><i className="icofont-rounded-double-left"></i>Previous Article</a>
                                                <p>Evisculate Parallel Processes via Technica Sound Models Authoritative</p>
                                            </div>
                                            <div className="next-article">
                                                <a href="#">Next Article <i className="icofont-rounded-double-right"></i></a>
                                                <p>Qvisculate Parallel Processes via Technica Sound Models Authoritative</p>
                                            </div>
                                        </div>
                                        <Author />
                                        <Comments />
                                        <CommentForm />
                                    </article>
                                </div>
                                <div className="col-lg-3 col-md-7 col-12">
						            <aside>
                                        <SearchBar />
                                        <RecentPost />
                                        <CategorieTwo />
                                        <Instagram />
                                        <Archive />
                                        <Tags />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogDetails;