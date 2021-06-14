import { ApiError, ApiGetDataError, ApiSuccess, ApiGetData } from "./actions/git.action";
import { GitEffects } from "./effects/git.effect";
import { gitReducer } from "./reducers/git.reducer";
import { getStateData, getStateError } from "./selectors/git.selector";

export const fromRoot = {
    ApiError,
    ApiSuccess,
    ApiGetDataError,
    ApiGetData,
    GitEffects,
    gitReducer,
    getStateData,
    getStateError

}