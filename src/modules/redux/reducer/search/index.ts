import { SearchActionType } from "../../action/search";
import {
    ON_SEARCH,
    DELETE_SEARCH_HISTORY,
    DELETE_ALL_SEARCH_HISTORY
} from '../../action/search/interface'
import SearchState from "./interface";

const isArrayFuc = (data: any) => {
    if (data !== null) {
        const notNullData = JSON.parse(data)
        if (Array.isArray(notNullData)) return notNullData
        else return []
    } else {
        return []
    }
}

const searchHistoryListInLocalStorage = isArrayFuc(localStorage.getItem("searchHistoryList"))

const initState: SearchState = {
    searchHistoryList: searchHistoryListInLocalStorage
}

const searchReducer = (
    state: SearchState = initState,
    action: SearchActionType
): SearchState => {
    switch (action.type) {
        case ON_SEARCH:
            return {
                ...state,
                searchHistoryList: state.searchHistoryList.concat(action.payload)
            }
        case DELETE_SEARCH_HISTORY:
            return {
                ...state,
                searchHistoryList: state.searchHistoryList.filter((item, index) => index !== action.payload)
            }
        case DELETE_ALL_SEARCH_HISTORY:
            return {
                ...state,
                searchHistoryList: []
            }
        default:
            return state
    }
}
export default searchReducer;