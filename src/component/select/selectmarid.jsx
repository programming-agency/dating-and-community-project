import { Component } from "react";


class SelectMarid extends Component {
    render() { 
        const {select} = this.props;
        return (
            <select defaultValue={select}>
                <option value="Single">Single</option>
                <option value="Marid">Marid</option>
            </select>
        );
    }
}
 
export default SelectMarid;