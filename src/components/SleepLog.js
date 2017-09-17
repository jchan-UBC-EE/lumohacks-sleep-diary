'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	render() {
		return (
			<form action="cgi-bin/formmail.pl" method="post" id="sleep_diary_form">
				<h4>Please fill this section out in the evening, before going to bed.</h4>
				Enter the time and duration of any naps you took today:<br />
				<div className="nap inputWrapper">
					<input className="napTime" type="time" name="nap_time" />
					<span className="leftBracket">(</span>
					<input className="napDurationHr" type="number" min="0" max="12" name="nap_duration_hr" />
					<span className="hourText">hr : </span>
					<input className="napDurationMin" type="number" min="0" max="45" step="15" name="nap_duration_min" />
					<span className="rightBracket">min)</span>
				</div>
				<br />
				<h4>Please fill this section out as soon as you get up for the day the following morning.</h4>
				What time did you get into bed?<br />
				<input className="bedTime" type="time" name="bed_time" />
				<br />
				What time did you try to go to sleep?<br />
				<input className="trySleepTime" type="time" name="try_Sleep_time" />
				<br />
				How long did it take you to fall asleep?<br />
				<div className="timeTryToSleep">
					<input className="timeToSleep" type="number" name="time_to_sleep" />
					<span className="timeToSleepText">min</span>
				</div>
				<br />
				How many times did you wake up?
				<br />
				<input type="number" name="time_wake_up" />
				<br />
				In total, how long did you sleep?
				<br />
				<input type="number" name="total_sleep_total" />
				<br />
				What time was your final awakening?
				<br />
				<input type="time" name="final_awakening" />
				<br />
				What time did you get out of bed for the day?
				<br />
				<input type="time" name="time_out_of_bed" />
				<br />
				Comments (if applicable)
				<br />
				<textarea name="comment" form="sleep_diary_form">Comments (if applicable)</textarea>



        	<div className="timeTryToSleep">
				</div>
			</form>
		);
	}
}
