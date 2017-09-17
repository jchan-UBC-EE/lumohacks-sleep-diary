'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	render() {
		return (
			<form action="cgi-bin/formmail.pl" method="post">
				<h4>Please fill this section out in the evening, before going to bed.</h4>
				Enter the time and duration of any naps you took today:<br />
				<div className="nap">
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
				How long did it take you to fall asleep?
        	<div className="timeTryToSleep">
				</div>
			</form>
		);
	}
}
