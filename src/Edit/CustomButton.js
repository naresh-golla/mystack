import React, { Component } from "react";
import "./Custmbutton.css";
class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        e.preventDefault();
        this.props.clickedbtn(this.props.item, this.state.selected)
        this.setState({
            selected: !this.state.selected
        })
    }
    render() {
        return (
            <React.Fragment>
                <span className={(this.state.selected ? "custombuttonstyleClicked" : "custombuttonstyle")} onClick={(e) => { this.clickHandler(e) }}>{this.props.item}</span>
            </React.Fragment>
        )
    }
}
export default CustomButton