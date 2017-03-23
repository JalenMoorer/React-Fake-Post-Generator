import React from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import Form from './components/Form';
import Preview from './components/Preview';

const App  = (props) => {

    return (
        <Layout>
            <Panel>
            <AppBar title='React App' leftIcon='menu' fixed flat/>
                <div style={{flex: 1, overflowY: 'auto', paddingTop: "6rem"}}>
                  <Form
                        name={props.name}
                        handle={props.handle}
                        message={props.message}
                        handleImageChange={props.handleImageChange}
                        handleChange={props.handleChange}
                        generateImage={props.generateImage}
                    />
                </div>
            </Panel>
            <Sidebar width={12} pinned >
                <div id='generatedTweet' style={{ flex:1, paddingTop: "6rem"}}>
                    <Preview 
                        name={props.name}
                        handle={props.handle}
                        message={props.message}
                        image={props.image}
                        handleChange={props.handleChange}
                        convertHashTag={props.convertHashTag}
                    />
                </div>
            </Sidebar>
        </Layout>
    );
}

export default App;
