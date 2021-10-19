import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ToastProvider} from "react-toast-notifications";
import {BrowserRouter} from 'react-router-dom';

import App from './App/containers/App';
import './Shared/styles/css/index.css';
import './Shared/styles/css/style.css';
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ToastProvider autoDismiss={true}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ToastProvider>
    </Provider>,
    document.getElementById('root')
);

