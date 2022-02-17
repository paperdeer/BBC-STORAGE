export interface SummonersResponseType {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}
export interface SummonerGameResponseType {
    statusCode: number;
    tft?: {
        queueType: string;
        summonerId: string;
        summonerName: string;
        leaguePoints: number;
        wins: number;
        losses: number;
        veteran: boolean;
        inactive: boolean;
        freshBlood: boolean;
        hotStreak: boolean;
    }
    solo?: {
        leagueId: string;
        queueType: string;
        tier: string;
        rank: string;
        summonerId: string;
        summonerName: string;
        leaguePoints: number;
        wins: number;
        losses: number;
        veteran: boolean;
        inactive: boolean;
        freshBlood: boolean;
        hotStreak: boolean;
    }
    flex?: {
        leagueId: string;
        queueType: string;
        tier: string;
        rank: string;
        summonerId: string;
        summonerName: string;
        leaguePoints: number;
        wins: number;
        losses: number;
        veteran: boolean;
        inactive: boolean;
        freshBlood: boolean;
        hotStreak: boolean;
    }
}
