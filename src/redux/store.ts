import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DepartmentsReducer } from "./departments/reducer";

export const rootReducer = combineReducers({
    departments: DepartmentsReducer
})
export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  applyMiddleware(thunk))