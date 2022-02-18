import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SummonerInfoResponseType } from "../../../models/user/responseType";
import { setSummonerInfo } from '../../../modules/redux/action/summoner';
import { reducerType } from '../../../modules/redux/reducer';

const UseSummonerInfo = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: reducerType) => state.summoner.data)
    const setState = (summonerData: SummonerInfoResponseType) => {
        dispatch(() => setSummonerInfo(summonerData))
    }
    return {
        state,
        setState
    }
}
export default UseSummonerInfo;