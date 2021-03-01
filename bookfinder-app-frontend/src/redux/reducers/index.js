import {
    combineReducers
} from 'redux';
import developerNameReducer from './developerNameReducer.js'


const reducers = combineReducers({
        developerNameReducer,
    })
    //combine reducer together.. we will have more reducers
    //call combineReducer from redux

export default reducers;