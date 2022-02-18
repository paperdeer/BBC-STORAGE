import React, { useEffect } from 'react';
import * as S from './styles';
import { useQuery } from "../../util/hooks/useQuery";
import { useNavigate } from "react-router-dom";
import useSearch from "../../util/hooks/useSummonerInfo/useSearch";
import { getSummonerInfo } from '../../util/util/reverseArray';
import { useDispatch } from 'react-redux';
import { setSummonerName } from '../../modules/redux/action/summoner';

const UserPage: React.FC = (): any => {
    const query = useQuery()
    const navigate = useNavigate()
    const userName = query.get("username");
    const summonerState = useSearch()
    const dispatch = useDispatch()
    useEffect(
        () => {
            if (userName === null || userName === "") return navigate("/");
            dispatch(setSummonerName(userName))
        }, []
    )
    return (
        <S.Wrapper>
            {summonerState.state?.summoner.name}
            <img src={`https://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${summonerState.state?.summoner.profileIconId}.png`} />
            <div>{summonerState.state?.league.solo?.tier}{summonerState.state?.league.solo?.rank}</div>
            <div>{summonerState.state?.league.flex?.tier}{summonerState.state?.league.flex?.rank}</div>
        </S.Wrapper>
    )
}
export default UserPage;