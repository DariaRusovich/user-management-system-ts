import { IDepartment } from '../../types/types';
import { DepartmentsActionTypes } from './actionTypes';

interface IDepatmentsState {
  departments: IDepartment[];
  loading: boolean;
  error: null | string;
}

interface IFetchStart {
  type: DepartmentsActionTypes.FETCH_START;
}
interface ISetDepartments {
  type: DepartmentsActionTypes.SET_DEPARTMENTS;
  payload: IDepartment[];
}
interface IFetchError {
  type: DepartmentsActionTypes.FETCH_ERROR;
  payload: string;
}
interface IFetchEnd {
  type: DepartmentsActionTypes.FETCH_END;
}
type ActionType = IFetchStart | ISetDepartments | IFetchError | IFetchEnd;

const initialState: IDepatmentsState = {
  departments: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action: ActionType): IDepatmentsState => {
  switch (action.type) {
    case DepartmentsActionTypes.FETCH_START: {
      return { ...state, loading: true };
    }
    case DepartmentsActionTypes.SET_DEPARTMENTS: {
      return { ...state, departments: action.payload };
    }
    case DepartmentsActionTypes.FETCH_ERROR: {
      return { ...state, error: action.payload };
    }
    case DepartmentsActionTypes.FETCH_END: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
