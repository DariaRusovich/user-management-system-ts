import { createStore, combineReducers, applyMiddleware } from "redux"
import { AuthReducer } from "./auth/reducer";
import { DepartmentsReducer } from "./departments/reducer";
import { EmployeesReducer } from "./employees/reducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../sagas/index";

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
    departments: DepartmentsReducer,
    employees: EmployeesReducer,
    auth: AuthReducer
})
export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)