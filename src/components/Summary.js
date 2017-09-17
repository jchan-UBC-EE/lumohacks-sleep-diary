'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DataSummary extends Component {
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
					<td>Total Sleep Time</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Time In Bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Sleep Efficiency</td>
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
					<td>Time To Bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Time Out Of bed</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>

			</table>
		)
	}
}