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
		this.setEarlyTimeToBed = this.setEarlyTimeToBed.bind(this);
		this.setLateTimeToBed = this.setLateTimeToBed.bind(this);
		this.setAverageTimeToBed = this.setAverageTimeToBed.bind(this);
		this.setEarlyTimeOutOfBed = this.setEarlyTimeOutOfBed.bind(this);
		this.setLateTimeOutOfBed = this.setLateTimeOutOfBed.bind(this);
		this.setAverageTimeOutOfBed = this.setAverageTimeOutOfBed.bind(this);
	}
	componentDidMount() {
		fetch('/api/get-summary')
			.then(response => response.json())
			.then(x => { console.log(x); console.log(x.length); this.setState({ data: x, arrayLength: x.length, apiReady: true }) })
	}

	setMinTotalSleep() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				for (let i = 0; i < this.state.arrayLength; i++) {
					if (parseInt(this.state.data[i]["HowLongDidYouSleep"]) > temp) {
						temp = parseInt(this.state.data[i]["HowLongDidYouSleep"]);
					}
				}
			}
			else {
				for (let i = 0; i < 7; i++) {
					if (parseInt(this.state.data[i]["HowLongDidYouSleep"]) > temp) {
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
			else {
				for (let i = 0; i < 7; i++) {
					temp += parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]);
				}
				temp = temp / 7;
			}
			return Math.round(temp * 100) / 100;
		}
	}

	setEarlyTimeToBed() {
		if (this.state.apiReady === true) {
			let earliest = (this.state.data[0]["TimeInBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				if ((earliest) > this.state.data[i]["TimeInBed"]) {
					earliest = this.state.data[i]["TimeInBed"];
				}
			}
			return earliest;
		}
	}

	setLateTimeToBed() {
		if (this.state.apiReady === true) {
			let latest = (this.state.data[0]["TimeInBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				if ((latest) < this.state.data[i]["TimeInBed"]) {
					latest = this.state.data[i]["TimeInBed"];
				}
			}
			return latest;
		}
	}

	setAverageTimeToBed() {
		if (this.state.apiReady === true) {
			let avg = parseInt(this.state.data[0]["TimeInBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				avg += parseInt(this.state.data[i]["TimeInBed"]);
			}
			return avg / this.state.data.length;
		}
	}

	setEarlyTimeOutOfBed() {
		if (this.state.apiReady === true) {
			let earliest = (this.state.data[0]["TimeToGetOutOfBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				if ((earliest) > this.state.data[i]["TimeToGetOutOfBed"]) {
					earliest = this.state.data[i]["TimeToGetOutOfBed"];
				}
			}
			return earliest;
		}
	}

	setLateTimeOutOfBed() {
		if (this.state.apiReady === true) {
			let latest = (this.state.data[0]["TimeToGetOutOfBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				console.log(this.state.data[i]["TimeToGetOutOfBed"])
				if ((latest) < this.state.data[i]["TimeToGetOutOfBed"]) {
					latest = this.state.data[i]["TimeToGetOutOfBed"];
				}
			}
			return latest;
		}
	}

	setAverageTimeOutOfBed() {
		if (this.state.apiReady === true) {
			let avg = parseInt(this.state.data[0]["TimeToGetOutOfBed"]);
			for (let i = 0; i < this.state.data.length; i++) {
				avg += parseInt(this.state.data[i]["TimeToGetOutOfBed"]);
			}
			return Math.ceil(avg / this.state.data.length);
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
					<td>{this.setEarlyTimeToBed()}</td>
					<td>{this.setLateTimeToBed()}</td>
					<td>{this.setAverageTimeToBed()}</td>
				</tr>
				<tr>
					<td className="alignleft">Time Out Of Bed</td>
					<td>{this.setEarlyTimeOutOfBed()}</td>
					<td>{this.setLateTimeOutOfBed()}</td>
					<td>{this.setAverageTimeOutOfBed()}</td>
				</tr>

			</table>
		)
	}
}