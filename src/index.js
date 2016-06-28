/**
 * Created by leonaburime on 6/27/16.
 */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Dummy from './components/Dummy';

//Webpack can import CSS files too!
import './assets/styles/styles.css';

render( <Dummy />,
  document.getElementById('app')
);
