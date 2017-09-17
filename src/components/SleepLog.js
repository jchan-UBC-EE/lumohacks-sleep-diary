'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			LogId: '',
			UserId: '',
			NapsDuringDay: '',
			Medication: '',
			TimeInBed: '',
			TimeTryToSleep: '',
			HowLongToSleep: '',
			AmountWakenUp: '',
			HowLongDidYouSleep: '',
			WakeTime: '',
			TimeToGetOutOfBed: '',
			Comments: '',
			CreateDate: ''
		}
		this.setNapsDuringDay = this.setNapsDuringDay.bind(this);
		this.setMedication = this.setMedication.bind(this);
		this.setTimeInBed = this.setTimeInBed.bind(this);
		this.setTimeTryToSleep = this.setTimeTryToSleep.bind(this);
		this.setHowLongToSleep = this.setHowLongToSleep.bind(this);
		this.setAmountWakeUp = this.setAmountWakeUp.bind(this);
		this.setHowLongDidYouSleep = this.setHowLongDidYouSleep.bind(this);
		this.setWakeTime = this.setWakeTime.bind(this);
		this.setTimeToGetOutOfBed = this.setTimeToGetOutOfBed.bind(this);
		this.setComments = this.setComments.bind(this);
		this.getDate = this.getDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.getDate();
	}

	getDate() {
		const today = new Date();
		let todayDate;
		if (today.getHours() < 15) {
			todayDate = today.getDate() - 1;
		}
		else {
			todayDate = today.getDate();
		}
		const getDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + todayDate;
		this.setState({ CreateDate: getDate });
	}

	setNapsDuringDay(event) {
		this.setState({ NapsDuringDay: event.target.value })
	}

	setMedication(event) {
		this.setState({ Medication: event.target.value })
	}

	setTimeInBed(event) {
		this.setState({ TimeInBed: event.target.value })
	}

	setTimeTryToSleep(event) {
		this.setState({ TimeTryToSleep: event.target.value })
	}

	setHowLongToSleep(event) {
		this.setState({ HowLongToSleep: event.target.value })
	}

	setAmountWakeUp(event) {
		this.setState({ AmountWakenUp: event.target.value })
	}

	setHowLongDidYouSleep(event) {
		this.setState({ HowLongDidYouSleep: event.target.value })
	}

	setWakeTime(event) {
		this.setState({ WakeTime: event.target.value })
	}

	setTimeToGetOutOfBed(event) {
		this.setState({ TimeToGetOutOfBed: event.target.value })
	}

	setComments(event) {
		this.setState({ Comments: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		fetch('/api/sleep-log', {
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
				if (json.logConfirm === true) {
					window.location.replace("/sleeplog");
				} else {
					document.getElementById("error").innerHTML = "please try again";
				}
			})
	}

	render() {
		return (
			<div>
				<br />
				<div>
                    <Link to={'/summary'}>
                        <button className="btn" type="button"> Summary </button>
                    </Link>
                </div>
				<div>
					<form
						id="sleep_diary_form"
						onSubmit={this.handleSubmit}>
						<h4>Please fill this section out in the evening, before going to bed.</h4>
						Enter the time and duration of any naps you took today:<br />
						<div >
							<input type="text" name="date" value={this.state.CreateDate} readonly />
						</div>
						<div className="nap inputWrapper">
							<input className="napTime"
								type="time"
								name="nap_time"
								onChange={this.setNapsDuringDay} />
						</div>
						Did you take any medication to help you sleep? If so, what did you take and when?
						<br />
					<input
							type="text"
							name="medication"
							onChange={this.setMedication} />
						<br />
						<h4>Please fill this section out as soon as you get up for the day the following morning.</h4>
						What time did you get into bed?<br />
						<input className="bedTime"
							type="time"
							name="bed_time"
							onChange={this.setTimeInBed} />
						<br />
						What time did you try to go to sleep?<br />
						<input className="trySleepTime"
							type="time"
							name="try_Sleep_time"
							onChange={this.setTimeTryToSleep} />
						<br />
						How long did it take you to fall asleep?<br />
						<div className="timeTryToSleep">
							<input className="timeToFallAsleep"
								type="number"
								name="time_to_sleep"
								onChange={this.setHowLongToSleep} />
						</div>
						<br />
						How many times did you wake up?
				<br />
						<input type="number"
							name="time_wake_up"
							onChange={this.setAmountWakeUp} />
						<br />
						In total, how long did you sleep?
				<br />
						<input type="number"
							name="total_sleep_total"
							onChange={this.setHowLongDidYouSleep} />
						<br />
						What time was your final awakening?
				<br />
						<input type="time"
							name="final_awakening"
							onChange={this.setWakeTime} />
						<br />
						What time did you get out of bed for the day?
				<br />
						<input type="time"
							name="time_out_of_bed"
							onChange={this.setTimeToGetOutOfBed} />
						<br />
						Comments (if applicable)
				<br />
						<textarea name="comment" form="sleep_diary_form" onChange={this.setComments}>Comments (if applicable)</textarea>
						<br />
						<input className="btn"
							type="submit"
							value="Submit" />
					</form>
				</div>
				<div>
					<p id="error"></p>
					<br />
				</div>
			</div>
		);
	}
}
