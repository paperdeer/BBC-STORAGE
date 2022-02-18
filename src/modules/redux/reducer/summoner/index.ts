import { summonerActionType } from "../../action/summoner";
import { GET_SUMMONER_INFO, INPUT_SUMMONER_NAME, INPUT_SUMMONER_NAME_FAILURE, INPUT_SUMMONER_NAME_SUCCESS } from "../../action/summoner/interface";
import SummonerState from "./interface";

const initState: SummonerState = {
    name: '',
    error: {
        status: 0,
        message: '',
        type: '',
    },
    data: undefined
}

const summonerReducer = (
    state: SummonerState = initState,
    action: summonerActionType
): SummonerState => {
    switch (action.type) {
        case GET_SUMMONER_INFO:
            return {
                ...state,
                data: action.payload
            }
        case INPUT_SUMMONER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case INPUT_SUMMONER_NAME_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case INPUT_SUMMONER_NAME_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default summonerReducer