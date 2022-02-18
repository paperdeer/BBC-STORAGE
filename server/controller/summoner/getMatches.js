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
const getMatchDetails = async (matchIdArray) => {
    const promises = matchIdArray.map(async id => {
        return await await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`)
            .then((res) => { return res.data })
    })
    const matches = await Promise.all(promises);
    return matches
}
module.exports.getMatchInfo = async (req, res) => {
    try {
        const { puuid } = req.query
        const matchId = await getMatchId(puuid);
        const matches = await getMatchDetails(matchId)
        res.send({
            matches: matches
        })
    } catch (err) {
        console.log(err)
    }
}