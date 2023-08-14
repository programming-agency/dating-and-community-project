import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const title = 'Ops! This Page Not Pound';
const desc = 'We are Really Sorry But the Page you Requested is Missing :(';
const btnText = 'Go Back to Home';


class ErrorPage extends Component {
    render() { 
        return (
            <section className="log-reg forezero">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="image image-404"></div>
                        <div className="col-lg-7 ">
                            <div className="log-reg-inner">
                                <div className="main-thumb mb-5">
                                    <img src="assets/images/404.png" alt="datting thumb" />
                                </div>
                                <div className="main-content inloginp">
                                    <div className="text-content text-center">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                        <Link to="/" className="default-btn reverse"><span>{btnText}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default ErrorPage;