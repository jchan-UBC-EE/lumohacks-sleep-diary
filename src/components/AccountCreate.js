'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AccountCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            Password: '',
            Name: '',
            Phone: '',
            Address: '',
            Email: '',
        }
        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
        this.setName = this.setName.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setUser(event) {
        this.setState({ UserName: event.target.value })
    }

    setPass(event) {
        this.setState({ Password: event.target.value })
    }

    setName(event) {
        this.setState({ Name: event.target.value })
    }    

    setPhone(event) {
        this.setState({ Phone: event.target.value })
    } 

    setAddress(event) {
        this.setState({ Address: event.target.value })
    } 

    setEmail(event) {
        this.setState({ Email: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('/api/sign-up', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.confirmed === true) {
                    window.location.replace("/");
                } else {
                    document.getElementById("error").innerHTML = "please try again";
                }
            })
    }

    render() {
        return (
            <div className="app-container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <br />
                            <h2> Sign Up </h2>
                            <br />
                            <label><b>User Name</b></label>
                            <input type="text" onChange={this.setUser} required />
                        </div>
                        <div>
                            <label><b>Password</b></label>
                            <input type="password" onChange={this.setPass} required />
                        </div>
                        <div>
                            <label><b>Name</b></label>
                            <input type="text" onChange={this.setName} required />
                        </div>
                        <div>
                            <label><b>Phone</b></label>
                            <input type="text" onChange={this.setPhone} required />
                        </div>
                        <div>
                            <label><b>Address</b></label>
                            <input type="text" onChange={this.setAddress} required />
                        </div>
                        <div>
                            <label><b>Email</b></label>
                            <input type="email" onChange={this.setEmail} required />
                        </div>
                        <div>
                            <input className="btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div>
                    <br />
                    <Link to="/">
                        <button className="btn" type="button"> Home </button>
                    </Link>
                </div>
                <p id="error"></p>
                <br /><br />
            </div>
        );
    }
}
