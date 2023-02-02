import React from "react";

class Add extends React.Component {
    render() {
        if (!this.props.isAdding) {
            return null;
        } else {
            return (
                <div className="editPopup">
                    <div className="editInterface">{this.props.children}</div>
                </div>
            );
        }
    }
};

export {Add}