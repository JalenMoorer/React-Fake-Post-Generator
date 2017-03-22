import React from 'react';
import '../index.css';

const Preview = (props) => {

	return (
		<div className='tweet'>
			<div className='tweet-post'>
				<div className='tweet-avatar'>
					<img 
						src={process.env.PUBLIC_URL + '/images/default_avatar.png'} 
						alt='' 
					/>
				</div>
				<div className='tweet-follow'>
					<img 
						src={process.env.PUBLIC_URL + '/images/follow_no.png'} 
						alt='' 
					/>
				</div>
				<div className='tweet-names'>
					<div className='tweet-name'>
						{props.name}
					</div>
					<div className='tweet-username'>
						{'@' + props.handle}
					</div>
				</div>
				<div className='tweet-message-container'>
					<p className='tweet-message'>
						{props.convertHashTag()}
					</p>
					<div className='tweet-image'>
						<img 
							id='tweetImage'
							src={props.image} 
							alt='' 
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Preview.propTypes = {
	name: React.PropTypes.string.isRequired,
	handle: React.PropTypes.string.isRequired,
	message: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	convertHashTag: React.PropTypes.func.isRequired
}

export default Preview;