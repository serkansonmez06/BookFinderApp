import {
    createStore
} from 'redux';


import developerNameReducer from './developerNameReducer.js'

const store = createStore(developerNameReducer, )

export default store