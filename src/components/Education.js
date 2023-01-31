import React from "react";
import "../styles/header.css";
import { Edit } from "./Edit";

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            schoolName: "School Name",
            degree: "Bachelors",
            fieldOfStudy: "Psychology",
            year: "2019",
            isEditing: false,
        }
    }

    handleEdit = (e) => {
        this.setState({
            isEditing: true,
            [e.target.name]: e.target.value,
        });
    }

    handleSave = (e) => {
        this.setState({
            isEditing: false,
        });
    }

    render() {
        const {schoolName, degree, fieldOfStudy, year, isEditing} = this.state;
        return (
            <>
                <div className="education">
                    <div>{schoolName}</div>
                    <div>{degree}</div>
                    <div>{fieldOfStudy}</div>
                    <div>{year}</div>
                    <button className="editButton" onClick={this.handleEdit}>Edit</button>
                </div>
                <Edit isEditing={isEditing}>
                    <input type="text" name="schoolName" onChange={this.handleEdit} value={schoolName} placeholder="School Name"></input>
                    <input type="text" name="degree" onChange={this.handleEdit} value={degree} placeholder="Degree Type"></input>
                    <input type="text" name="fieldOfStudy" onChange={this.handleEdit} value={fieldOfStudy} placeholder="Field of Study"></input>
                    <input type="text" name="year" onChange={this.handleEdit} value={year} placeholder="Year"></input>
                    <button className="saveButton" onClick={this.handleSave}>Save</button>
                </Edit>
            </>
        );
    };
};

export {Education}