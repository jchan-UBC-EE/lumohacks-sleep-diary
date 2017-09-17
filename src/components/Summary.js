'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Summary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			arrayLength: 0,
			apiReady: false,
		}
		this.setMinTotalSleep = this.setMinTotalSleep.bind(this);
		this.setMaxTotalSleep = this.setMaxTotalSleep.bind(this);
		this.setAverageTotalSleep = this.setAverageTotalSleep.bind(this);
		this.setMinTimeInBed = this.setMinTimeInBed.bind(this);
		this.setMaxTimeInBed = this.setMaxTimeInBed.bind(this);
		this.setAverageTimeInBed = this.setAverageTimeInBed.bind(this);
		this.setMinSleepEfficiency = this.setMinSleepEfficiency.bind(this);
		this.setMaxSleepEfficiency = this.setMaxSleepEfficiency.bind(this);
		this.setAverageSleepEfficiency = this.setAverageSleepEfficiency.bind(this);
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
				temp = parseInt(this.state.data[0]["HowLongDidYouSleep"]);
				for (let i = 0; i < this.state.arrayLength; i++) {
					if (parseInt(this.state.data[i]["HowLongDidYouSleep"]) < temp)
					{
						temp = parseInt(this.state.data[i]["HowLongDidYouSleep"]);
					}
				}
			}
			else{
				temp = parseInt(this.state.data[this.state.arrayLength - 1 - 0]["HowLongDidYouSleep"]);
				for (let i = 0; i < 7; i++) {
					if (parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]) < temp)
					{
						temp = parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]);
					}
				}
			}
			return temp;
		}
	}

	setMaxTotalSleep() {
		if (this.state.apiReady === true) {
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
					if (parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]) > temp)
					{
						temp = parseInt(this.state.data[this.state.arrayLength - 1 - i]["HowLongDidYouSleep"]);
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


	setMinTimeInBed() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				let start = new Date(2000, 0, 1, parseInt(this.state.data[0]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[0]["TimeInBed"].substring(3, 5)));
				let end = new Date(2000, 0, 2, parseInt(this.state.data[0]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[0]["TimeToGetOutOfBed"].substring(3, 5)));
				let diff = end - start;
				temp = end - start;
				for (let i = 0; i < this.state.arrayLength; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					if (diff < temp)
					{
						temp = diff;
					}
				}
			}
			else{
				let start = new Date(2000, 0, 1, parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeInBed"].substring(3, 5)));
				let end = new Date(2000, 0, 2, parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeToGetOutOfBed"].substring(3, 5)));
				let diff = end - start;
				temp = end - start;
				for (let i = 0; i < 7; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					if (diff < temp)
					{
						temp = diff;
					}
				}
			}

			var msec = temp
			var hh = Math.floor(msec / 1000 / 60 / 60);
			msec -= hh * 1000 * 60 * 60;
			var mm = Math.floor(msec / 1000 / 60);
			msec -= mm * 1000 * 60;
			var ss = Math.floor(msec / 1000);
			msec -= ss * 1000;
			return hh + "hr " + mm + "min";
		}
	}

	setMaxTimeInBed() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				let start = new Date(2000, 0, 1, parseInt(this.state.data[0]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[0]["TimeInBed"].substring(3, 5)));
				let end = new Date(2000, 0, 2, parseInt(this.state.data[0]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[0]["TimeToGetOutOfBed"].substring(3, 5)));
				let diff = end - start;
				temp = end - start;
				for (let i = 0; i < this.state.arrayLength; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					if (diff > temp)
					{
						temp = diff;
					}
				}
			}
			else{
				let start = new Date(2000, 0, 1, parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeInBed"].substring(3, 5)));
				let end = new Date(2000, 0, 2, parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - 0]["TimeToGetOutOfBed"].substring(3, 5)));
				let diff = end - start;
				temp = end - start;
				for (let i = 0; i < 7; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					if (diff > temp)
					{
						temp = diff;
					}
				}
			}

			var msec = temp
			var hh = Math.floor(msec / 1000 / 60 / 60);
			msec -= hh * 1000 * 60 * 60;
			var mm = Math.floor(msec / 1000 / 60);
			msec -= mm * 1000 * 60;
			var ss = Math.floor(msec / 1000);
			msec -= ss * 1000;
			return hh + "hr " + mm + "min";
		}
	}

	setAverageTimeInBed() {
		if (this.state.apiReady === true) {
			// console.log(this.state.data[0]["HowLongDidYouSleep"]);
			let temp = 0;
			if (this.state.arrayLength < 7) {
				for (let i = 0; i < this.state.arrayLength; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					temp += diff;
				}
				temp = temp / this.state.arrayLength;
			}
			else{
				for (let i = 0; i < 7; i++) {
					let start = new Date(2000, 0, 1, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeInBed"].substring(3, 5)));
					let end = new Date(2000, 0, 2, parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(0, 2)), parseInt(this.state.data[this.state.arrayLength - 1 - i]["TimeToGetOutOfBed"].substring(3, 5)));
					let diff = end - start;
					temp += diff;
				}
				temp = temp / 7;
			}
			var msec = temp
			var hh = Math.floor(msec / 1000 / 60 / 60);
			msec -= hh * 1000 * 60 * 60;
			var mm = Math.floor(msec / 1000 / 60);
			msec -= mm * 1000 * 60;
			var ss = Math.floor(msec / 1000);
			msec -= ss * 1000;
			return hh + "hr " + mm + "min";
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

	setMinSleepEfficiency() {
		if (this.state.apiReady === true) {
			let minArray = [];
			for (let i = 0; i < this.state.data.length; i++) {
				let timeInBed = parseInt(this.state.data[i]["TimeInBed"]) - parseInt(this.state.data[i]["TimeToGetOutOfBed"])
				let longInBed = parseInt(this.state.data[i]["HowLongDidYouSleep"])
				let efficiency = timeInBed / longInBed
				minArray.push(efficiency)
			}
			console.log(minArray)
			let min = minArray[0]
			for (let i = 0; i < minArray.length; i++) {
				if ((min) > minArray[i]) {
					min = minArray[i];
				}
			}
			return min;
		}
	}

	setMaxSleepEfficiency() {
		if (this.state.apiReady === true) {
			let maxArray = [];
			for (let i = 0; i < this.state.data.length; i++) {
				let timeInBed = parseInt(this.state.data[i]["TimeInBed"]) - parseInt(this.state.data[i]["TimeToGetOutOfBed"])
				let longInBed = parseInt(this.state.data[i]["HowLongDidYouSleep"])
				let efficiency = timeInBed / longInBed
				maxArray.push(efficiency)
			}
			let max = maxArray[0]
			for (let i = 0; i < maxArray.length; i++) {
				if ((max) < maxArray[i]) {
					max = maxArray[i];
				}
			}
			return max;
		}
	}

	setAverageSleepEfficiency() {
		if (this.state.apiReady === true) {
			let avg = 0;
			for (let i = 0; i < this.state.data.length; i++) {
				let timeInBed = parseInt(this.state.data[i]["TimeInBed"]) - parseInt(this.state.data[i]["TimeToGetOutOfBed"])
				let longInBed = parseInt(this.state.data[i]["HowLongDidYouSleep"])
				let efficiency = timeInBed / longInBed
				avg =+ efficiency
			}
			return avg/this.state.data.length;
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
					<td>{this.setMaxTotalSleep()}</td>
					<td>{this.setAverageTotalSleep()}</td>
				</tr>
				<tr>
					<td className="alignleft">Time In Bed</td>
					<td>{this.setMinTimeInBed()}</td>
					<td>{this.setMaxTimeInBed()}</td>
					<td>{this.setAverageTimeInBed()}</td>
				</tr>
				<tr>
					<td className="alignleft">Sleep Efficiency</td>
					<td>{this.setMinSleepEfficiency()}</td>
					<td>{this.setMaxSleepEfficiency()}</td>
					<td>{this.setAverageSleepEfficiency()}</td>
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