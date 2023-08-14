import { Component } from "react";

class SelectPost extends Component {
    render() { 
        const {select} = this.props;
        return (
            <select defaultValue={select}>
                <option value="everything">Everything</option>
                <option value="recentpost">Recent Post</option>
                <option value="oldpost">old Post</option>
                <option value="allpost">All Post</option>
            </select>
        );
    }
}
 
export default SelectPost;