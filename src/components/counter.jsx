import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
	margin: 1rem;
	display: flex;
	.badge {
		display: inline block;
		margin: 0.5rem;
		padding: 0.4rem;
		font-weight: 600;
		border-radius: 0.2rem;
	}
	.badge-blue {
		color: white;
		background: blue;
	}
	.badge-yellow {
		color: black;
		background: yellow;
	}
	.btn-primary {
		display: inline block;
		padding: 0.4rem 0.5rem;
		color: white;
		font-size: 1.5rem;
		font-weight: 400;
		background: #333333;
		border-radius: 0.4rem;

		&:hover {
			cursor: pointer;
		}
	}
	.btn-delete {
		display: inline block;
		margin: 0.5rem;
		padding: 0.5rem;
		background: red;
		border-radius: 0.4rem;
	}
`;

export class Counter extends Component {
	formatValue = () => {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};

	getBadgeClasses = () => {
		let badge_classes = "badge badge-";
		badge_classes += this.props.counter.value === 0 ? "yellow" : "blue";
		return badge_classes;
	};

	render() {
		return (
			<Section>
				<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn-primary"
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn-delete"
				>
					Delete
				</button>
			</Section>
		);
	}
}

export default Counter;
