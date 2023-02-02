import React from "react";
import "../styles/header.css";
import { Add } from "./Add";

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Name",
            email: "Email",
            number: "Number",
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
        const {name, email, number, isAdding} = this.state;
        return (
            <>
                <div className="header">
                    <div className="name">{name}</div>
                    <div>
                        <div className="email">{email}</div>
                        <div className="number">{number}</div>
                    </div>
                    <button className="editButton" onClick={this.handleAdd}>Edit</button>
                </div>
                <Add isAdding={isAdding}>
                    <input type="text" name="name" onChange={this.handleAdd} value={name} placeholder="Name"></input>
                    <input type="text" name="email" onChange={this.handleAdd} value={email} placeholder="Email"></input>
                    <input type="text" name="number" onChange={this.handleAdd} value={number} placeholder="Phone Number"></input>
                    <button className="saveButton" onClick={this.handleSave}>Save</button>
                </Add>
            </>
        );
    }
}

export {Header}