import requester from "../axios/axios";
import {API_KEY} from "../../../ config/config";

const userApi = {
    getSummonerByName(name:string){
        return requester({
            url : "/user/search?summonerName="+name,
            method : "get"
        })
    },
    getSummonerRankById(id:string){
        return requester({
            url : "/user/getleague?summonerId="+id,
            method : "get"
        })
    },
    // getSummonerByName(name:string){
    //     const encodedName = encodeURI(name)
    //     return requester({
    //         url : `/lol/summoner/v4/summoners/by-name/${encodedName}?api_key=${API_KEY}`,
    //         method : "get"
    //     })
    // },
    // getSummonerRankById(summonerid:string){
    //     return requester({
    //         url : `/lol/league/v4/entries/by-summoner/${summonerid}?api_key=${API_KEY}`,
    //         method : "get"
    //     })
    // }
}
export default userApi