import React, { Component } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';

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
            <AppBar Title='React App' leftIcon='menu' fixed flat/>
                <article style={{ position: 'fixed', top: '6.4rem', right: 0, left: 0, bottom: 0 }}>
                  <Form />
                </article>
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
