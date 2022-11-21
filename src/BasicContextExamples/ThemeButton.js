import Button from "./Button";
import ThemeContext from "./ThemeContext";
import React from "react";

class ThemeButton extends React.Component {
    // Assign a contextType to read the current theme context
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context}/>
    }
}

export default ThemeButton;