import React from "react"

class Overview extends React.Component {
    render() {
        const {jobs, onDelete, onEdit} = this.props;
        const reversedJobs = jobs.slice().reverse();
        console.log(jobs);
        return (
            <>
            {reversedJobs.map((job) => {
                return (
                    <div key={job.id} className="job">
                        <div>
                            <div className="companyName">{job.company}</div>
                            <div>{job.position}</div>
                            <div>{job.tasks}</div>
                            <div>{job.startDate} {job.endDate}</div>
                        </div>
                        <div className="jobButtons">
                            <button value={job.id} onClick={onDelete}>Delete</button>
                            <button value={job.id} onClick={onEdit}>Edit</button>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
}

export {Overview}