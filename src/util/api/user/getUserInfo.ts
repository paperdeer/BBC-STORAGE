import requester from "../axios/axios";
import { API_KEY } from "../../../ config/config";

const userApi = {
    getSummonerByName(name: string) {
        return requester({
            url: "/user/search?summonerName=" + name,
            method: "get"
        })
    },
}
export default userApi