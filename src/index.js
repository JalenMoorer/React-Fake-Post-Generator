import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

import Routes from './routes';

import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './index.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
  		<Routes history={browserHistory} />
  	</ThemeProvider>,
  	document.getElementById('root')
);