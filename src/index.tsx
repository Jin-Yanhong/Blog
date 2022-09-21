// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router basename="/Blog">
            <App />
        </Router>
    </Provider>
    // </React.StrictMode>
);
