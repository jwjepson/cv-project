import React from "react"

class Overview extends React.Component {
    render() {
        const {data, onDelete, onEdit, section} = this.props;
        const reversedData = data.slice().reverse();

        if (data.length === 0) {
            return (
                <div className="job">No {section} information available.</div>
            )
        }

        if (section === "Experience") {
            return (
                <>
                {reversedData.map((data) => {
                    return (
                        <div key={data.id} className="job">
                            <div>
                                <div className="companyName">{data.company}</div>
                                <div>{data.position}</div>
                                <div>{data.tasks}</div>
                                <div>{data.startDate} {data.endDate}</div>
                            </div>
                            <div className="dataButtons">
                                <button value={data.id} onClick={onDelete}>Delete</button>
                                <button value={data.id} onClick={onEdit}>Edit</button>
                            </div>
                        </div>
                    )
                })}
                </>
            )
        } else {
            return (
                <>
                {reversedData.map((data) => {
                    return (
                        <div key={data.id} className="job">
                            <div>
                                <div className="companyName">{data.name}</div>
                                <div>{data.degree}</div>
                                <div>{data.field}</div>
                                <div>{data.startDate} {data.endDate}</div>
                            </div>
                            <div className="dataButtons">
                                <button value={data.id} onClick={onDelete}>Delete</button>
                                <button value={data.id} onClick={onEdit}>Edit</button>
                            </div>
                        </div>
                    )
                })}
                </>
            )
        }
    }
}

export {Overview}