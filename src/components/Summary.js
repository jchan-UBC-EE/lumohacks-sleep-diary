'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Summary extends Component {

	componentDidMount() {
		fetch('/api/get-summary')
			.then(response => response.json())
			.then(x => console.log(x))
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
					<td></td>
					<td></td>
					<td></td>
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