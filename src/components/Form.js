import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';

class Form extends Component {

	state = {
		message: ''
	};

	handleChange = (name, value) => {
		this.setState({...this.state, [name]: value});
	};

	render() {
		return (
	      <section>
	      	<form>
		        <Input type='text' label='Message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} multiline='true' maxLength={140} />
		        <Button icon='add' label='Add Image' flat primary />
		        <div style={{paddingTop: '2rem'}} >
		        	<Button type='submit' label='Generate Tweet Image' raised primary />
		        </div>
	        </form>
	      </section>
		);
	}
}

export default Form;