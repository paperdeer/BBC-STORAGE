const axios = require('axios');
const { API_KEY } = require('../../config/constant')

const getMatchId = async (puuid) => {
    return await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
const getMatchDetails = async (matchIdArray, puuid) => {
    const promises = matchIdArray.map(async id => {
        return await await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`)
            .then(async (res) => {
                const participant = await res.data.info.participants.filter((item, index) => {
                    if (item.puuid === puuid) return item
                })
                return {
                    game_mode: res.data.info.gameMode,
                    match_id: res.data.metadata.matchId,
                    duration: res.data.info.gameDuration,
                    participant: participant[0]
                }
            })
    })
    const matches = await Promise.all(promises);
    return matches
}
module.exports.getMatchInfo = async (req, res) => {
    try {
        const { puuid } = req.query
        const matchIds = await getMatchId(puuid);
        const matches = await getMatchDetails(matchIds, puuid)
        res.send({
            matches: matches
        })
    } catch (err) {
        console.log(err)
    }
}