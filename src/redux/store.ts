import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DepartmentsReducer } from "./departments/reducer";
import { EmployeesReducer } from "./employees/reducer";

export const rootReducer = combineReducers({
    departments: DepartmentsReducer,
    employees: EmployeesReducer
})
export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  applyMiddleware(thunk))