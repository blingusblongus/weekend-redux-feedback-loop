import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_SECTION':
            // Add or update the formSection value
            return {
                ...state, 
                [action.payload.formSection]: action.payload.value
            }; 
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(
        logger
    )
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
