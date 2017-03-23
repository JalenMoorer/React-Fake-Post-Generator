import React from 'react';
import {Router, Route} from 'react-router';

import AppContainer from './containers/AppContainer';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={AppContainer}></Route>
	</Router>
);

export default Routes;