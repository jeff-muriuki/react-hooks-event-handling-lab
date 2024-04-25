import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  rootElement
);
