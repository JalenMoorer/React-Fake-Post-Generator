import React, { Component } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';


import Form from './components/Form';
import Preview from './components/Preview';

import './App.css';

class App extends Component {
   
  render() {
    return (
        <Layout>
            <Panel>
            <AppBar title='React App' leftIcon='menu' fixed flat/>
                <div style={{flex: 1, overflowY: 'auto', padding: "6rem"}}>
                  <Form />
                </div>
            </Panel>
            <Sidebar pinned={true} width={66}>
                <div style={{ flex:1, paddingTop: "6rem"}}>
                    <Preview />
                </div>
            </Sidebar>
        </Layout>
    );
  }
}

export default App;
