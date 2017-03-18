import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';

class Form extends Component {

	state = {
		name: '',
		handle: '',
		message: ''
	};

	handleChange = (name, value) => {
		this.setState({...this.state, [name]: value});
	};

	render() {
		return (
	      <section>
	      	<form>
	      		<Input type='text' label='Name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={40} />
	      		<Input type='text' label='Handle' value={this.state.handle} onChange={this.handleChange.bind(this, 'handle')} maxLength={15} />
		        <Input type='text' label='Message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} multiline={true} maxLength={140} />
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