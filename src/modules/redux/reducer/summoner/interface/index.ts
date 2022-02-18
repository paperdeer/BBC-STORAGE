import { error } from "../../../../../types";

export default interface SummonerState {
    name: string,
    error: error
    data?: {
        league: {
            flex?: {
                freshBlood: boolean;
                hotStreak: boolean;
                inactive: boolean
                leagueId: string
                leaguePoints: number
                losses: number
                queueType: string
                rank: string
                summonerId: string
                summonerName: string
                tier: string
                veteran: boolean
                wins: number
            }
            solo?: {
                freshBlood: boolean;
                hotStreak: boolean;
                inactive: boolean
                leagueId: string
                leaguePoints: number
                losses: number
                queueType: string
                rank: string
                summonerId: string
                summonerName: string
                tier: string
                veteran: boolean
                wins: number
            }
        }
        summoner: {
            accountId: string
            id: string
            name: string
            profileIconId?: number
            puuid: string
            revisionDate?: number
            summonerLevel?: number
        }
    }
}