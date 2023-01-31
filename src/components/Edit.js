import React from "react";

class Edit extends React.Component {
    render() {
        if (!this.props.isEditing) {
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

export {Edit}