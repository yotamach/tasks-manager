import React, {Component} from 'react';
import './Cell.scss';

export default class Cell extends Component {
	constructor(props) {
		super(props);
	}

	drawSelection () {
		const {val} = this.props;
		if(val === -1)
			return null;
		if(val === 1)
			return "x";
		if(val === 2)
			return "o";
	}

	render() {
		return (
			<div className="cell">
				<h2>{this.drawSelection()}</h2>
    		</div>
		);
	}
}
