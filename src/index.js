import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import '../src/assets/css/index.css'
import rootReducer from './reducers/index';
import APP from '../src/components/App'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <APP />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

console.log(store.getState())
