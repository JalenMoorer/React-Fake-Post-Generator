import React, { Component } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';

import './App.css';

class App extends Component {
   
   state = {
        sidebarPinned: true
    };

  render() {
    return (
        <Layout>
            <Panel>
            <AppBar Title='React App' leftIcon='menu' fixed flat/>
                <div style={{ position: 'fixed', flex: 1, overflowY: 'auto', padding: '1.8rem', top: '6.4rem' }}>
                    <h1>Main Content</h1>
                    <p>Main content goes here.</p>
                </div>
            </Panel>
            <Sidebar pinned={ this.state.sidebarPinned } width={12}>
                <div style={{ flex: 1 }}>
                    <p>Supplemental content goes here.</p>
                </div>
            </Sidebar>
        </Layout>
    );
  }
}

export default App;
