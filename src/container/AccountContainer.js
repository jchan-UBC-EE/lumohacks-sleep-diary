'use strict';

import React from 'react';
import { Link } from 'react-router';
import Login from '../components/Login';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedin: false,
        }
    }

    componentWillMount() {
        //get name / id from shib 
    }

    handleSubmit(state) {
        return event => {
            event.preventDefault()
            fetch('/api/login', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(state)
            })
                .then(response => response.json())
                .then(json => {
                    console.log(json.validation)
                    if (json.validation === true) {
                        window.location.replace("/sleeplog");
                    } else {
                        document.getElementById("error").innerHTML = "please try again";
                    }
                })
        }
    }

    render() {
        return (
            <div className="app-container">
                <Login handleSubmit={this.handleSubmit.bind(this)} />
                <p id="error"></p>
            </div>
        );
    }
}
