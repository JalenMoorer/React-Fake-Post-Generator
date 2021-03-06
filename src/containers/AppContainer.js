import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import App from '../App';

class AppContainer extends Component {

    state = {
        name: 'Sample Name',
        handle: 'sample',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor et eros imperdiet commodo et vel enim. Phasellus augue ligula #posuere',
        image: process.env.PUBLIC_URL + '/images/react.png'
    };

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({ image: reader.result });
        }

        reader.readAsDataURL(file)
    };

    convertHashTag = () => {
        const modifiedMessage = this.state.message.split(" ");
        const regexp = /#[\w]+/g;

        let element = modifiedMessage.map(string => 
            string.match(regexp) ? <span className="tweet-hashTag" key={string}> {" " + string + " "} </span> : " " + string)

        return element;
    };


    generateImage = () => {

        domtoimage.toBlob(document.getElementById('generatedTweet'), { quality: 0.95 })
            .then(function (blob) {
                FileSaver.saveAs(blob, 'Generated-Tweet.png');
            });
    };

	render() {
		return (
			<App
	            name={this.state.name}
	            handle={this.state.handle}
	            message={this.state.message}
	            image={this.state.image}
	            handleChange={this.handleChange}
	            handleImageChange={this.handleImageChange}
	            convertHashTag={this.convertHashTag}
	            generateImage={this.generateImage}
			/>
		);
	}
}


export default AppContainer;