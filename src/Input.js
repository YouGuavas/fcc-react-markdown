import React, {Component} from 'react';
import './Input.css';
import ReactMarkdown from 'react-markdown';


export class Input extends Component {
	handleUserInput(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	constructor(props) {
		super(props);
		const headers = '# Header 1\n### Header 2'
		const font = '**bold**\n\n*italic*'
		const list = '1. Item 1\n2. Item 2\n\n- Item\n- Item'

		this.state = {
			userInput: `Just start typing!\n\nExamples:\n${headers}\n${font}\n\n${list}`
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