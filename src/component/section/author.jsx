import { Component } from "react";

const Name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";

let AuthorSocialList = [
    {
        IconName: 'icofont-twitter',
        IconLink: '#',
    },
    {
        IconName: 'icofont-behance',
        IconLink: '#',
    },
    {
        IconName: 'icofont-instagram',
        IconLink: '#',
    },
    {
        IconName: 'icofont-vimeo',
        IconLink: '#',
    },
    {
        IconName: 'icofont-linkedin',
        IconLink: '#',
    },
]


class Author extends Component {
    render() { 
        return (
            <div className="author">
                <div className="author__thumb">
                    <img src="assets/images/blog/author/01.jpg" alt="author" />
                </div>
                <div className="author__content">
                    <h6 className="mb-2">{Name}</h6>
                    <p>{desc}</p>
                    <div className="social-media">
                        {AuthorSocialList.map((val, i) => (
                            <a href={`${val.IconLink}`} key={i}><i className={`${val.IconName}`}></i></a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Author;