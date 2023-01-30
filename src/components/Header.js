import React from "react";
import "../styles/header.css";

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Name",
            email: "Email",
            number: "Number",
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
        const {name, email, number} = this.state;
        if (!this.state.isEditing) {
            return (
                <>
                    <div className="header">
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>{number}</div>
                        <button className="editButton" onClick={this.handleEdit}>Edit</button>
                    </div>
                </>
            );
        } else {
            return (
                <div className="editInterface">
                    <input type="text" name="name" onChange={this.handleEdit} value={name} placeholder="Name"></input>
                    <input type="text" name="email" onChange={this.handleEdit} value={email} placeholder="Email"></input>
                    <input type="text" name="number" onChange={this.handleEdit} value={number} placeholder="Phone Number"></input>
                    <button className="saveButton" onClick={this.handleSave}>Save</button>
                </div>
            )
        }
    }
}

export {Header}