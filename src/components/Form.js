import React from 'react';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';

const Form = (props) => {

	return (
      <section style={{padding: "1.8rem"}} >

      		<Input 
      			type='text' 
      			label='Name' 
      			value={props.name} 
      			onChange={props.handleChange.bind(this, 'name')} 
      			maxLength={20} 
      		/>
      		<Input 
	      		type='text' 
	      		label='Handle' 
	      		value={props.handle} 
	      		onChange={props.handleChange.bind(this, 'handle')} 
	      		maxLength={15} 
	      	/>
	        <Input 
		        type='text' 
		        label='Message' 
		        value={props.message} 
		        onChange={props.handleChange.bind(this, 'message')} 
		        multiline={true} 
		        maxLength={140} 
		    />
	        <Input 
		        type='text' 
		        label='Add Image' 
		        value={props.image} 
		        onChange={props.handleChange.bind(this, 'image')} 
	        />
	        <div style={{paddingTop: '2rem'}} >
	        	<Button 
	        		type='submit' 
	        		label='Generate Tweet Image'
	        		onClick={props.generateImage}
	        		raised 
	        		primary 
	        	/>
	        </div>
      </section>
	);
}

Form.propTypes = {
	name: React.PropTypes.string.isRequired,
	handle: React.PropTypes.string.isRequired,
	message: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	generateImage: React.PropTypes.func.isRequired
}

export default Form;
