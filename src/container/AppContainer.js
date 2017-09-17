'use strict';

import React from 'react';
import { Link } from 'react-router';
import SleepLog from '../components/SleepLog';

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


    render() {
        return (
            <div className="app-container">
                <SleepLog />
            </div>
        );
    }
}
