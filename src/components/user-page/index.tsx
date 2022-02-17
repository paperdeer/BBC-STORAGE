import React, { useEffect } from 'react';
import * as S from './styles';
import { useQuery } from "../../util/hooks/useQuery";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import useSearch from "../../util/hooks/search/useSearch";
import { SummonersResponseType } from "../../models/user/responseType";
import userApi from "../../util/api/user/getUserInfo";

const UserPage: React.FC = (): any => {
    const query = useQuery()
    const navigate = useNavigate()
    const userName = query.get("username");
    const summonerState = useSearch()
    useEffect(
        () => {
            if (userName === null || userName === "") return navigate("/")
            userApi.getSummonerByName(userName)
                .then((res: AxiosResponse<SummonersResponseType>) => {
                    summonerState.setState.setSummonerSummaryResponseData(res.data)
                })
        }, []
    )
    console.log(summonerState.state.summonerGameResponseData)
    return (
        <S.Wrapper>
            {summonerState.state?.summonerSummaryResponseData?.name}
            <img src={`https://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${summonerState.state.summonerSummaryResponseData?.profileIconId}.png`} />
            <div>{summonerState.state.summonerGameResponseData?.solo?.tier}{summonerState.state.summonerGameResponseData?.solo?.rank}</div>
            <div>{summonerState.state.summonerGameResponseData?.flex?.tier}{summonerState.state.summonerGameResponseData?.flex?.rank}</div>
        </S.Wrapper>
    )
}
export default UserPage;