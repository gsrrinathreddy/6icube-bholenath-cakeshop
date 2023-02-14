import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cakeReducer from '../Features/Cakes/cakeSlice'

const store=configureStore({
    reducer:{
        cake:cakeReducer
    },
    middleware:getDafaultMiddleware=>getDafaultMiddleware().concat(logger)
})
export default store;