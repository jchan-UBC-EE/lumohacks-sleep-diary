'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Summary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			arrayLength: 0,
			apiReady: false
		}
		this.setMinTotalSleep = this.setMinTotalSleep.bind(this);
		// this.setMaxTotalSleep = this.setMaxTotalSleep.bind(this);
		this.setAverageTotalSleep = this.setAverageTotalSleep.bind(this);
		// this.setMinTimeInBed = this.setMinTimeInBed.bind(this);
		// this.setMaxTimeInBed = this.setMaxTimeInBed.bind(this);
		// this.setAverageTimeInBed = this.setAverageTimeInBed.bind(this);
		// this.setMinSleepEfficiency = this.setMinSleepEfficiency.bind(this);
		// this.setMaxSleepEfficiency = this.setMaxSleepEfficiency.bind(this);
		// this.setAverageSleepEfficiency = this.setAverageSleepEfficiency.bind(this);
		// this.setEarlyTimeToBed = this.setEarlyTimeToBed.bind(this);
		// this.setLateTimeToBed = this.setLateTimeToBed.bind(this);
		// this.setAverageTimeToBed = this.setAverageTimeToBed.bind(this);
		// this.setEarlyTimeOutOfBed = this.setEarlyTimeOutOfBed.bind(this);
		// this.setLateTimeOutOfBed = this.setLateTimeOutOfBed.bind(this);
		// this.setAverageTimeOutOfBed = this.setAverageTimeOutOfBed.bind(this);
	}
	componentDidMount() {
		fetch('/api/get-summary')
			.then(response => response.json())
			.then(x => {console.log(x); console.log(x.length); this.setState({data: x, arrayLength: x.length, apiReady: true})})
	}

	setMinTotalSleep() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				for (let i = 0; i < this.state.arrayLength; i++) {
					if (parseInt(this.state.data[i]["HowLongDidYouSleep"]) > temp)
					{
						temp = parseInt(this.state.data[i]["HowLongDidYouSleep"]);
					}
				}
			}
			else{
				for (let i = 0; i < 7; i++) {
					if (parseInt(this.state.data[i]["HowLongDidYouSleep"]) > temp)
					{
						temp = parseInt(this.state.data[i]["HowLongDidYouSleep"]);
					}
				}
			}
			return temp;
		}
	}

	setAverageTotalSleep() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				for (let i = 0; i < this.state.arrayLength; i++) {
					temp += parseInt(this.state.data[i]["HowLongDidYouSleep"]);
				}
				temp = temp / this.state.arrayLength;
			}
			else{
				for (let i = 0; i < 7; i++) {
					temp += parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]);
				}
				temp = temp / 7;
			}
			return Math.round(temp * 100) / 100;
		}
	}

	render() {
		return (
			<table>
				<tr>
					<td></td>
					<td>Minimum</td>
					<td>Maximum</td>
					<td>Average</td>
				</tr>
				<tr>
					<td className="alignleft">Total Sleep Time</td>
					<td>{this.setMinTotalSleep()}</td>
					<td></td>
					<td>{this.setAverageTotalSleep()}</td>
				</tr>
				<tr>
					<td className="alignleft">Time In Bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td className="alignleft">Sleep Efficiency</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>Earliest</td>
					<td>Latest</td>
					<td>Average</td>
				</tr>
				<tr>
					<td className="alignleft">Time To Bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td className="alignleft">Time Out Of bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>

			</table>
		)
	}
}