import {combineReducers} from 'redux'
import productReducer from './productReducer'
import signupReducer from './signupReducer'

const allReducers = combineReducers({
    products: productReducer,
    signup: signupReducer
})

export default allReducers;