import { Component } from "react";

class SelectGender extends Component {
    render() { 
        const {select} = this.props;
        return (
            <select defaultValue={select}>
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
        );
    }
}
 
export default SelectGender;