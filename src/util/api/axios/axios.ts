import axios from "axios";

const location = localStorage.getItem("location")

const requester = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'location': `${location}`
    }
})

// const requester = axios.create({
//     baseURL : `https://${location}.api.riotgames.com`
// })

export default requester;