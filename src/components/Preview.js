import React, { Component } from 'react';

import '../index.css';

class Preview extends Component {

	state = {
		message: ''
	};

	handleChange = (name, value) => {
		this.setState({...this.state, [name]: value});
	};

	render() {
		return (
			<div className='tweet'>
				<div className='tweet-avatar'>
					<img src={process.env.PUBLIC_URL + '/images/default_avatar.png'} alt='' />
				</div>
				<div className='tweet-names'>
					<div className='tweet-name'>Sample Name</div>
					<div className='tweet-username'>@sameHandle</div>
				</div>
			</div>
		);
	}
}

export default Preview;