import React from "react";
import "../styles/header.css";
import { Add } from "./Add";
import { Sections } from "./Sections";

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            schoolName: "School Name",
            degree: "Bachelors",
            fieldOfStudy: "Psychology",
            year: "2019",
            isAdding: false,
        }
    }

    handleAdd = (e) => {
        this.setState({
            isAdding: true,
            [e.target.name]: e.target.value,
        });
    }

    handleSave = (e) => {
        this.setState({
            isAdding: false,
        });
    }

    render() {
        const {schoolName, degree, fieldOfStudy, year, isAdding} = this.state;
        return (
            <>
                <Sections title="Education" handleAdd={this.handleAdd}/>
                <div className="education">
                    <div>
                        <div className="schoolName">{schoolName}</div>
                        <div>{degree}, {fieldOfStudy}</div>
                        <div>{year}</div>
                    </div>
                </div>
                <Add isAdding={isAdding}>
                    <input type="text" name="schoolName" onChange={this.handleAdd} value={schoolName} placeholder="School Name"></input>
                    <input type="text" name="degree" onChange={this.handleAdd} value={degree} placeholder="Degree Type"></input>
                    <input type="text" name="fieldOfStudy" onChange={this.handleAdd} value={fieldOfStudy} placeholder="Field of Study"></input>
                    <input type="text" name="year" onChange={this.handleAdd} value={year} placeholder="Year"></input>
                    <button className="saveButton" onClick={this.handleSave}>Save</button>
                </Add>
            </>
        );
    };
};

export {Education}