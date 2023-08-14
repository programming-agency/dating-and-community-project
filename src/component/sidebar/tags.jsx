import { Component } from "react";

const title = "Our Popular tags";

let TagsList = [
    {
        Name: 'Food',
        SiteLink: '#',
    },
    {
        Name: 'Love',
        SiteLink: '#',
    },
    {
        Name: 'Ollya',
        SiteLink: '#',
    },
    {
        Name: 'health',
        SiteLink: '#',
    },
    {
        Name: 'Partner',
        SiteLink: '#',
    },
    {
        Name: 'Man',
        SiteLink: '#',
    },
    {
        Name: 'Male',
        SiteLink: '#',
    },
    {
        Name: 'Date',
        SiteLink: '#',
    },
    {
        Name: 'Women',
        SiteLink: '#',
    },
]

class Tags extends Component {
    render() { 
        return (
            <div className="widget widget-tags">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {TagsList.map((val, i) => (
                        <li key={i}><a href={`${val.SiteLink}`}>{val.Name}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Tags;