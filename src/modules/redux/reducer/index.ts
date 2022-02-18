import { combineReducers } from "redux";
import searchReducer from "./search";
import summonerReducer from "./summoner";

const rootReducer = combineReducers({
    search: searchReducer,
    summoner: summonerReducer
})

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;