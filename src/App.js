import React, { Component } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';


import Form from './components/Form'

import './App.css';

class App extends Component {
   
   state = {
        sidebarPinned: true
    };

  render() {
    return (
        <Layout>
            <Panel>
            <AppBar title='React App' leftIcon='menu' fixed flat/>
                <div style={{ padding: "6rem"}}>
                  <Form />
                </div>
            </Panel>
            <Sidebar pinned={ this.state.sidebarPinned } width={50}>
                <div style={{ flex: 1 }}>
                    <p>Supplemental content goes here.</p>
                </div>
            </Sidebar>
        </Layout>
    );
  }
}

export default App;
