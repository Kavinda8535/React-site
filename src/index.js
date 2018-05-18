import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/reducerIndex";
//import Boxcon from "./"

// function reducer() {
//     return {
        
//     }
// }

const store = createStore(allReducers);

const Application = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
