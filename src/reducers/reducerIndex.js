import {combineReducers} from 'redux'
import productReducer from './productReducer'

const allReducers = combineReducers({
    productsR: productReducer
})

export default allReducers;