import { rootState } from '../store';

export function departmentsSelector(state: rootState) {
  return state.departments;
}
