const axios = require('axios');
const { API_KEY } = require("../../config/constant");

let summoner = {};
let league = {};
let id;
let RankObject = {
    flex: '',
    solo: ''
};

const getSummonerLeague = async (summonerId, res) => {
    await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`)
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].queueType === "RANKED_FLEX_SR") RankObject.flex = response.data[i]
                else if (response.data[i].queueType === "RANKED_SOLO_5x5") RankObject.solo = response.data[i]
            }
            league = RankObject;
            return response.data
        })
        .catch((err) => console.log(err))
}

const summonerByName = async (summonerName) => {
    await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
        .then(response => {
            summoner = response.data
            id = response.data.id
            return response.data
        })
}

module.exports.summonerInfo = async (req, res) => {
    const { summonerName } = req.query;
    const encodedName = encodeURI(summonerName)
    try {
        await summonerByName(encodedName)
        await getSummonerLeague(id)
        res.send({
            summoner,
            league
        })
    } catch (err) {
        console.log(err)
        res.send({
            summoner,
            league
        })
    }

}