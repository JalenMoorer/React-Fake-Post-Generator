import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

import Routes from './routes';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css';
import './index.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
  		<Routes history={browserHistory} />
  	</ThemeProvider>,
  	document.getElementById('root')
);