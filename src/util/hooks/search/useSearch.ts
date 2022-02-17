import React,{useState} from 'react';
import {SummonersResponseType,SummonerGameResponseType} from "../../../models/user/responseType";

const useSearch = () => {
    const [summonerSummaryResponseData,setSummonerSummaryResponseData] = useState<SummonersResponseType>();
    const [summonerGameResponseData,setSummonerGameResponseData] = useState<SummonerGameResponseType>();
    return {
        state : {
            summonerSummaryResponseData,
            summonerGameResponseData
        },
        setState : {
            setSummonerSummaryResponseData,
            setSummonerGameResponseData
        }
    }
}
export default useSearch;