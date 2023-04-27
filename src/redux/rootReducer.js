import { combineReducers } from "redux"
import { operationsReducer } from "./reducers/operations"

export const rootReducer = combineReducers({
    operationsReducer,
    
})