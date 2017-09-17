'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            Password: '',
        }
        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
    }

    setUser(event) {
        this.setState({ UserName: event.target.value })
    }

    setPass(event) {
        this.setState({ Password: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.props.handleSubmit(this.state)}>
                        <div>
                            <br />
                            <h2> Login </h2>
                            <br />
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" onChange={this.setUser} required />
                        </div>
                        <div>
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" onChange={this.setPass} required />
                        </div>
                        <div>
                            <input className="btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <br />
                <div>
                    <Link to={'/sign-up'}>
                        <button className="btn" type="button"> Sign-Up </button>
                    </Link>
                </div>
                <br />
            </div>
        );
    }
}
