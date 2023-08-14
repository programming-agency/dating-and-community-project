import { Component } from "react";
import { Link } from 'react-router-dom';


class PageHeader extends Component {
    render() { 
        const {title} = this.props;
        const {curPage} = this.props;
        return (
            <div className="pageheader bg_img" style={{backgroundImage: "url(/assets/images/bg-img/pageheader.jpg)"}}>
                <div className="container">
                    <div className="pageheader__content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PageHeader;