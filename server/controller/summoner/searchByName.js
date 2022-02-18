const axios = require('axios');
const { API_KEY } = require("../../config/constant");

const getSummonerLeague = async (summonerId, location) => {
    return await axios.get(`https://${location}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`)
        .then(response => {
            let RankObject = {
                flex: '',
                solo: ''
            };
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].queueType === "RANKED_FLEX_SR") RankObject.flex = response.data[i]
                else if (response.data[i].queueType === "RANKED_SOLO_5x5") RankObject.solo = response.data[i]
            }
            return RankObject;
        })
}

const summonerByName = async (summonerName, location) => {
    return await axios.get(`https://${location}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
        .then(res => {
            return res.data
        })
}

module.exports.summonerInfo = async (req, res) => {
    const { summonerName } = req.query;
    const summonerLoaction = req.headers.location;
    const encodedName = encodeURI(summonerName)
    try {
        const summoner = await summonerByName(encodedName, summonerLoaction)
        const league = await getSummonerLeague(summoner.id, summonerLoaction)
        res.send({
            summoner,
            league
        })
    } catch (err) {
        console.log(err)
        res.send({
            summoner: summoner.data,
            league: league.data
        })
    }

}