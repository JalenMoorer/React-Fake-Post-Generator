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
				<div className='tweet-post'>
					<div className='tweet-avatar'>
						<img src={process.env.PUBLIC_URL + '/images/default_avatar.png'} alt='' />
					</div>
					<div className='tweet-follow'>
						<img src={process.env.PUBLIC_URL + '/images/follow_no.png'} alt='' />
					</div>
					<div className='tweet-names'>
						<div className='tweet-name'>Sample Name</div>
						<div className='tweet-username'>@sameHandle</div>
					</div>
					<div className='tweet-message-container'>
						<p className='tweet-message'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor et eros imperdiet commodo et vel enim. Phasellus augue ligula posuere.
						</p>
					</div>
				</div>
			</div>

		);
	}
}

export default Preview;