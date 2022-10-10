import React from 'react';
import ReactDOM from 'react-dom/client';
// Style here, what's the difference between index.css vs. App.css?
import './index.css';

import { QuoteMachine } from './App.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QuoteMachine />
    </React.StrictMode>
);