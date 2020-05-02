// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// // import './index.css'
// import * as serviceWorker from './serviceWorker'
//
// ReactDOM.render(<App />, document.getElementById('root'))
//
// serviceWorker.unregister()

import App from './App'
import {render} from "react-dom";
import React from "react";
import './index.css'

const container = document.getElementById("app");
render(<App />, container);