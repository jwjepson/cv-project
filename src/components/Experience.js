import React from "react";
import { Sections } from "./Sections";
import { Add } from "./Add";
import {Overview} from "./Overview";
import uniqid from "uniqid"
import {Edit} from "./Edit";

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
            isAdding: false,
            isEditing: false,
            jobs: [],
        }
    }

    onChange = (e) => {
        if (this.state.isEditing) {
            this.setState({
                job: {
                    ...this.state.job,
                    [e.target.name]: e.target.value,
                },
            });
        } else {
            this.setState({
                isAdding: true,
                job: {
                    ...this.state.job,
                    [e.target.name]: e.target.value,
                },
            });
        }
    }

    onDelete = (e) => {
        let newArray = this.state.jobs.filter((job) => {
            return job.id !== e.target.value;
        });
        this.setState({
            jobs: [...newArray],
        })
    }

    onEdit = (e) => {
        let selectedJob = this.state.jobs.find((job) => {
            return job.id === e.target.value;
        });

        this.setState({
            job: selectedJob,
            isEditing: true,
        });
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
            isAdding: false,
        });
    }

    saveEdit = (e) => {
        let newArray = this.state.jobs.map((job) => {
            if (job.id === this.state.job.id) {
                return this.state.job;
            }
            return job;
        });

        this.setState({
            jobs: [...newArray],
            isEditing: false,
            job: {
                company: "",
                position: "",
                tasks: "",
                startDate: "",
                endDate: "",
                id: uniqid(),
            }
        });
    }

    render() {
        const {company, position, tasks, startDate, endDate} = this.state.job;
        const {isAdding, jobs, isEditing} = this.state;
        return (
            <>
                <Sections title="Experience" handleAdd={this.onChange}/>
                {isAdding && (
                    <Add isAdding={isAdding}>
                        <input type="text" name="company" onChange={this.onChange} value={company} placeholder="Company Name"></input>
                        <input type="text" name="position" onChange={this.onChange} value={position} placeholder="Position Title"></input>
                        <input type="text" name="tasks" onChange={this.onChange} value={tasks} placeholder="Tasks"></input>
                        <input type="text" name="startDate" onChange={this.onChange} value={startDate} placeholder="Start Date"></input>
                        <input type="text" name="endDate" onChange={this.onChange} value={endDate} placeholder="End Date"></input>
                        <button className="saveButton" onClick={this.addJob}>Add</button>
                    </Add>
                )}
                {isEditing && (
                    <Edit isEditing={isEditing}>
                        <input type="text" name="company" onChange={this.onChange} value={company} placeholder="Company Name"></input>
                        <input type="text" name="position" onChange={this.onChange} value={position} placeholder="Position Title"></input>
                        <input type="text" name="tasks" onChange={this.onChange} value={tasks} placeholder="Tasks"></input>
                        <input type="text" name="startDate" onChange={this.onChange} value={startDate} placeholder="Start Date"></input>
                        <input type="text" name="endDate" onChange={this.onChange} value={endDate} placeholder="End Date"></input>
                        <button className="saveButton" onClick={this.saveEdit}>Edit</button>
                    </Edit>
                )}
                <Overview onDelete={this.onDelete} onEdit={this.onEdit} data={jobs} section="Experience"/>
            </>
        )
    }
}

export {Experience}