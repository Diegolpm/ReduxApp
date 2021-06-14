import { createAction, props } from "@ngrx/store";


export const ApiGetData = createAction('[GIT] Api Get Data', props<{ id: string }>());
export const ApiGetDataError = createAction('[GIT] Api Get Data Error', props<{ id: string }>());

export const ApiError = createAction('[GIT] Api Data', props<{ error: any }>());
export const ApiSuccess = createAction('[GIT] Api Success', props<{ data: any }>());