import React from "react";

class Sections extends React.Component {
    render() {
        const {title, handleAdd} = this.props;     
        return(
            <div className="sectionHeader">
                <h2>{title}</h2>
                <button onClick={handleAdd} className="sectionAddButton">Add {title}</button>
            </div>
        )
    }
}

export {Sections}