import { createReducer, on } from "@ngrx/store";
import { ApiError, ApiGetData, ApiSuccess } from '../actions/git.action';

export interface GitState {
    error: any;
    data: any
}

const initialState: GitState = {
    error: null,
    data: null
};

export const gitReducer = createReducer(
    initialState,
    on(ApiError, (state, action) => ({ error: action.error, data: null })),
    on(ApiSuccess, (state, action) => ({ data: action.data, error: null })),
);