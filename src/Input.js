import React, {Component} from 'react';
import './Input.css';
import ReactMarkdown from 'react-markdown';
//import marked from 'react-marked';
const marked = require('react-marked');

export class Input extends Component {
	handleUserInput(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
		this.handleUserInput = this.handleUserInput.bind(this);
	}
	render() {
		return (
				<div>
					<textarea type="text" className="markdownText"
					onChange={this.handleUserInput} 
					value={this.state.userInput}>
					</textarea>
					<ReactMarkdown className="scrollable" source={this.state.userInput} />
				</div>
			)
	}
}