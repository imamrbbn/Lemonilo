const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

import ProductReducer from './reducers/ProductReducer'

const reducer = combineReducers({ 
  ProductReducer
})

const store = createStore( reducer, applyMiddleware(thunk) )

export default store