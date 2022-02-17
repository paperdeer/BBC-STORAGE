import { UserInfoActionType } from '../../action/userInfo';
import {
    GET_SUMMONER,
    GET_LEAGUE
} from '../../action/userInfo/interface';
import { SummonerResponseState, LeagueResponseState } from './interface';

const summonerInitState: SummonerResponseState = {
    data: {
        id: '',
        accountId: '',
        puuid: '',
        name: '',
        profileIconId: undefined,
        revisionDate: undefined,
        summonerLevel: undefined
    }
}

export const summonerReducer = (
    state: SummonerResponseState = summonerInitState,
    action: UserInfoActionType
): SummonerResponseState => {
    switch (action.type) {
        case GET_SUMMONER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

const leagueInitState: LeagueResponseState = {
    data: {
        statusCode: undefined,
        tft: {
            queueType: '',
            summonerId: '',
            summonerName: '',
            leaguePoints: undefined,
            wins: undefined,
            losses: undefined,
            veteran: undefined,
            inactive: undefined,
            freshBlood: undefined,
            hotStreak: undefined,
        },
        flex: {
            leagueId: '',
            queueType: '',
            tier: '',
            rank: '',
            summonerId: '',
            summonerName: '',
            leaguePoints: undefined,
            wins: undefined,
            losses: undefined,
            veteran: undefined,
            inactive: undefined,
            freshBlood: undefined,
            hotStreak: undefined,
        },
        solo: {
            leagueId: '',
            queueType: '',
            tier: '',
            rank: '',
            summonerId: '',
            summonerName: '',
            leaguePoints: undefined,
            wins: undefined,
            losses: undefined,
            veteran: undefined,
            inactive: undefined,
            freshBlood: undefined,
            hotStreak: undefined,
        }
    }
}

export const leagueReducer = (
    state: LeagueResponseState = leagueInitState,
    action: UserInfoActionType
) => {
    switch (action.type) {
        case GET_LEAGUE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
