import React from "react";
import { Sections } from "./Sections";
import { Add } from "./Add";
import {Overview} from "./Overview";
import uniqid from "uniqid"
import {Edit} from "./Edit";

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            school: {
                name: "",
                degree: "",
                field: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            },
            isAdding: false,
            isEditing: false,
            schools: [],
        }
    }

    onChange = (e) => {
        if (this.state.isEditing) {
            this.setState({
                school: {
                    ...this.state.school,
                    [e.target.name]: e.target.value,
                },
            });
        } else {
            this.setState({
                isAdding: true,
                school: {
                    ...this.state.school,
                    [e.target.name]: e.target.value,
                },
            });
        }
    }

    onDelete = (e) => {
        let newArray = this.state.schools.filter((school) => {
            return school.id !== e.target.value;
        });
        this.setState({
            schools: [...newArray],
        })
    }

    onEdit = (e) => {
        let selectedSchool = this.state.schools.find((school) => {
            return school.id === e.target.value;
        });

        this.setState({
            school: selectedSchool,
            isEditing: true,
        });
    }

    addSchool = (e) => {
        this.setState({
            schools: this.state.schools.concat(this.state.school),
            school: {
                name: "",
                degree: "",
                field: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            },
            isAdding: false,
        });
    }

    saveEdit = (e) => {
        let newArray = this.state.schools.map((school) => {
            if (school.id === this.state.school.id) {
                return this.state.school;
            }
            return school;
        });

        this.setState({
            schools: [...newArray],
            isEditing: false,
            school: {
                name: "",
                degree: "",
                field: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            }
        });
    }

    render() {
        const {name, degree, field, startDate, endDate} = this.state.school;
        const {isAdding, schools, isEditing} = this.state;
        return (
            <>
                <Sections title="Education" handleAdd={this.onChange}/>
                {isAdding && (
                    <Add isAdding={isAdding}>
                        <input type="text" name="name" onChange={this.onChange} value={name} placeholder="School Name"></input>
                        <input type="text" name="degree" onChange={this.onChange} value={degree} placeholder="Degree"></input>
                        <input type="text" name="field" onChange={this.onChange} value={field} placeholder="Field of Study"></input>
                        <input type="text" name="startDate" onChange={this.onChange} value={startDate} placeholder="Start Date"></input>
                        <input type="text" name="endDate" onChange={this.onChange} value={endDate} placeholder="End Date"></input>
                        <button className="saveButton" onClick={this.addSchool}>Add</button>
                    </Add>
                )}
                {isEditing && (
                    <Edit isEditing={isEditing}>
                        <input type="text" name="name" onChange={this.onChange} value={name} placeholder="School Name"></input>
                        <input type="text" name="degree" onChange={this.onChange} value={degree} placeholder="Degree"></input>
                        <input type="text" name="field" onChange={this.onChange} value={field} placeholder="Field of Study"></input>
                        <input type="text" name="startDate" onChange={this.onChange} value={startDate} placeholder="Start Date"></input>
                        <input type="text" name="endDate" onChange={this.onChange} value={endDate} placeholder="End Date"></input>
                        <button className="saveButton" onClick={this.saveEdit}>Edit</button>
                    </Edit>
                )}
                <Overview onDelete={this.onDelete} onEdit={this.onEdit} data={schools} section="Education"/>
            </>
        )
    }
}

export {Education}