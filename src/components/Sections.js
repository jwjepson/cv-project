import React from "react";

class Sections extends React.Component {
    render() {
        const {title, handleEdit} = this.props;     
        return(
            <div className="sectionHeader">
                <h2>{title}</h2>
                <button onClick={handleEdit} className="sectionEditButton">Add {title}</button>
                <button>Edit</button>
            </div>
        )
    }
}

export {Sections}