import { GET_SUMMONER_INFO, INPUT_SUMMONER_NAME, INPUT_SUMMONER_NAME_FAILURE, INPUT_SUMMONER_NAME_SUCCESS } from "./interface";
import { createAction } from "typesafe-actions";
import { SummonerInfoResponseType } from "../../../../models/user/responseType";
import { error } from "../../../../types";

export const setSummonerInfo = createAction(GET_SUMMONER_INFO)<SummonerInfoResponseType>();
export const setSummonerName = createAction(INPUT_SUMMONER_NAME)<string>();
export const setSummonerNameS = createAction(INPUT_SUMMONER_NAME_SUCCESS)<SummonerInfoResponseType>();
export const setSummonerNameF = createAction(INPUT_SUMMONER_NAME_FAILURE)<error>();

export type summonerActionType = ReturnType<typeof setSummonerInfo>
    | ReturnType<typeof setSummonerName>
    | ReturnType<typeof setSummonerNameS>
    | ReturnType<typeof setSummonerNameF>