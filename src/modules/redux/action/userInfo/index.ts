import { GET_SUMMONER, GET_LEAGUE } from "./interface";
import { createAction } from "typesafe-actions";

interface SummonerResponseState {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId?: number;
    revisionDate?: number;
    summonerLevel?: number;
}
interface LeagueResponseState {
    statusCode?: number;
    tft?: {
        queueType: string;
        summonerId: string;
        summonerName: string;
        leaguePoints?: number;
        wins?: number;
        losses?: number;
        veteran?: boolean;
        inactive?: boolean;
        freshBlood?: boolean;
        hotStreak?: boolean;
    }
    solo?: {
        leagueId: string;
        queueType: string;
        tier: string;
        rank: string;
        summonerId: string;
        summonerName: string;
        leaguePoints?: number;
        wins?: number;
        losses?: number;
        veteran?: boolean;
        inactive?: boolean;
        freshBlood?: boolean;
        hotStreak?: boolean;
    }
    flex?: {
        leagueId: string;
        queueType: string;
        tier: string;
        rank: string;
        summonerId: string;
        summonerName: string;
        leaguePoints?: number;
        wins?: number;
        losses?: number;
        veteran?: boolean;
        inactive?: boolean;
        freshBlood?: boolean;
        hotStreak?: boolean;
    }
}
export const setGetSummoner = createAction(GET_SUMMONER)<SummonerResponseState>();
export const setGetLeague = createAction(GET_LEAGUE)<LeagueResponseState>();

export type UserInfoActionType =
    | ReturnType<typeof setGetSummoner>
    | ReturnType<typeof setGetLeague>