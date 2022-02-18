import { AxiosResponse } from "axios"
import { SummonerInfoResponseType } from "../../../models/user/responseType"
import userApi from "../../api/user/getUserInfo"
import UseSummonerInfo from "../../hooks/useSummonerInfo/useSearch"
import useSearch from "../../hooks/useSummonerInfo/useSearch"

export const ReverseArray = (array: any[]) => {
    let reversedArray: any[] = []
    array.map((item) => reversedArray.unshift(item))
    return reversedArray
}

export const getSummonerInfo = async (summonerName: string) => {
    return await userApi.getSummonerByName(summonerName)
    // .then((res: AxiosResponse<SummonerInfoResponseType>) => {

    // })
}