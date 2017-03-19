import React, { Component } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import Form from './components/Form';
import Preview from './components/Preview';


class App extends Component {

    state = {
        name: 'Sample Name',
        handle: 'sample',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor et eros imperdiet commodo et vel enim. Phasellus augue ligula posuere.',
        image: process.env.PUBLIC_URL + '/images/react.png'
    };

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };
   
  render() {
    return (
        <Layout>
            <Panel>
            <AppBar title='React App' leftIcon='menu' fixed flat/>
                <div style={{flex: 1, overflowY: 'auto', paddingTop: "6rem"}}>
                  <Form
                        name={this.state.name}
                        handle={this.state.handle}
                        message={this.state.message}
                        image={this.state.image}
                        handleChange={this.handleChange}
                    />
                </div>
            </Panel>
            <Sidebar width={12} pinned >
                <div style={{ flex:1, paddingTop: "6rem"}}>
                    <Preview 
                        name={this.state.name}
                        handle={this.state.handle}
                        message={this.state.message}
                        image={this.state.image}
                        handleChange={this.handleChange}
                    />
                </div>
            </Sidebar>
        </Layout>
    );
  }
}

export default App;
