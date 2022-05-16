import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/reducer";
import { DepartmentsReducer } from "./departments/reducer";
import { EmployeesReducer } from "./employees/reducer";

export const rootReducer = combineReducers({
    departments: DepartmentsReducer,
    employees: EmployeesReducer,
    auth: AuthReducer
})
export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  applyMiddleware(thunk))