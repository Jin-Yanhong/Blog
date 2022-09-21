// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { HashRouter as Router } from 'react-router-dom';
import App from './App';

// 如果环境变量文件设置了 `PUBLIC_URL` ,那么路由不需要设置 basename

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    // </React.StrictMode>
);
