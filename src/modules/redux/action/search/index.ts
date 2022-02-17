import { ON_SEARCH, DELETE_SEARCH_HISTORY, DELETE_ALL_SEARCH_HISTORY } from './interface'
import { createAction } from 'typesafe-actions'

export const setOnSearch = createAction(ON_SEARCH)<string>();
export const setDeleteSearchHistory = createAction(DELETE_SEARCH_HISTORY)<number>();
export const setDeleteAllSearchHistory = createAction(DELETE_ALL_SEARCH_HISTORY)();

export type SearchActionType =
    | ReturnType<typeof setOnSearch>
    | ReturnType<typeof setDeleteSearchHistory>
    | ReturnType<typeof setDeleteAllSearchHistory>;