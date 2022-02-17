import { combineReducers } from "redux";
import searchReducer from "./search";
import { summonerReducer, leagueReducer } from "./userInfo";

const rootReducer = combineReducers({
    search: searchReducer,
    summoner: summonerReducer,
    league: leagueReducer
})

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;