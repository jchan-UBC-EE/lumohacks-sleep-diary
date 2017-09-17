'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AccountCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            Password: '',
        }
        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setUser(event) {
        console.log(event.target.value)
        this.setState({ UserName: event.target.value })
    }

    setPass(event) {
        console.log(event.target.value)
        this.setState({ Password: event.target.value })
    }

    setEmail(event) {
        console.log(event.target.value)
        this.setState({ Password: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8080/check', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state)
        })
            .then(this.setState({ home: true }))
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <br /><br />
                            <label><b>User Name</b></label>
                            <input type="text" onChange={this.setUser} required />
                        </div>
                        <div>
                            <label><b>Password</b></label>
                            <input type="password" onChange={this.setPass} required />
                        </div>
                        <div>
                            <label><b>Email</b></label>
                            <input type="password" onChange={this.setEmail} required />
                        </div>
                        <div>
                            <input className="btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div>
                    <Link to="/sign-up">
                        <button className="btn" type="button"> Sign-Up </button>
                    </Link>
                </div>
                <br /><br />
            </div>
        );
    }
}
