import React from "react";
import { Sections } from "./Sections";
import { Edit } from "./Edit";
import {Overview} from "./Overview";
import uniqid from "uniqid"

class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            job: {
                company: "",
                position: "",
                tasks: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            },
            isEditing: false,
            jobs: [],
        }
    }

    onChange = (e) => {
        this.setState({
            isEditing: true,
            job: {
                ...this.state.job,
                [e.target.name]: e.target.value,
            },
        });
    }

    onDelete = (e) => {
        let newArray = this.state.jobs.filter((job) => {
            return job.id !== e.target.value;
        });
        this.setState({
            jobs: newArray,
        })
    }

    addJob = (e) => {
        this.setState({
            jobs: this.state.jobs.concat(this.state.job),
            job: {
                company: "",
                position: "",
                tasks: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            },
            isEditing: false,
        });
    }

    render() {
        const {company, position, tasks, startDate, endDate} = this.state.job;
        const {isEditing, jobs} = this.state;
        return (
            <>
                <Sections title="Experience" handleEdit={this.onChange}/>
                <Edit isEditing={isEditing}>
                    <input type="text" name="company" onChange={this.onChange} value={company} placeholder="Company Name"></input>
                    <input type="text" name="position" onChange={this.onChange} value={position} placeholder="Position Title"></input>
                    <input type="text" name="tasks" onChange={this.onChange} value={tasks} placeholder="Tasks"></input>
                    <input type="text" name="startDate" onChange={this.onChange} value={startDate} placeholder="Start Date"></input>
                    <input type="text" name="endDate" onChange={this.onChange} value={endDate} placeholder="End Date"></input>
                    <button className="saveButton" onClick={this.addJob}>Add Experience</button>
                </Edit>
                <Overview onDelete={this.onDelete} jobs={jobs}/>
            </>
        )
    }
}

export {Experience}