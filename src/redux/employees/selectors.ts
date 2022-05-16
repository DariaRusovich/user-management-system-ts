import { rootState } from '../store';

export function employeesSelector(state: rootState) {
  return state.employees;
}
