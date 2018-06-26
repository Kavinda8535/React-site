import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import allReducers from "./reducers/reducerIndex";
import Async from './middleware/Async';
//import Boxcon from "./"

// function reducer() {
//     return {
        
//     }
// }

// const createFinalStore = compose(
//     applyMiddleware(thunk)
//   )(createStore)

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(Async,thunk));
//const store = createFinalStore(allReducers, {});

const Application = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
