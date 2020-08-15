import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readStory, clearForm } from '../actions';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			adj: "",
			verb: "",
			adv: ""
		};
	}

	render() {
		return (
			<div>
				<form className="Form" onSubmit={() => this.handleSubmit}>
					<label>Adjective: 
						<input type="text" onChange={(event) => this.adjInput(event)} />
					</label>
					<label>"ing" Verb: 
						<input type="text" onChange={(event) => this.formInput("verb", event.target.value)} />
					</label>
					<label>Adverb: 
						<input type="text" onChange={(event) => this.formInput("adv", event.target.value)} />
					</label>
					<button type="submit">Read Story</button>
				</form>
				<button onClick={() => this.clearForm()}>Clear Form</button>
			</div>
		);
	} // end of render

	formInput = (type, word) => {
		this.setState = ({
			type: word
		});
	};

	adjInput(event) {
		this.setState = ({
			adj: event.target.value
		});
	};

	handleSubmit = (event) => {
			event.preventDefault();

			this.props.readStory({
				adj: this.state.adj,
				verb: this.state.verb,
				adv: this.state.adv
			});
			
		};

	clearForm = () => {
		this.setState({
				adj: "",
				verb: "",
				adv: ""
			});	
	};
			


} // end of component

	// function mapStateToProps(state) {
	// 	return {
	// 		adj: state.adj,
	// 		verb: state.verb,
	// 		adv: state.adv
	// 	};
	// }

	const mapActionsToProps = { readStory, clearForm };

export default connect(null, mapActionsToProps)(Form);
