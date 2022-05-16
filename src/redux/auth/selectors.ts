import { rootState } from '../store';

export function authSelector(state: rootState) {
    return state.auth
}