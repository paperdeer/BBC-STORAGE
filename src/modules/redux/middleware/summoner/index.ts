import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
    GET_SUMMONER_INFO, INPUT_SUMMONER_NAME
} from '../../action/summoner/interface';
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { reducerType } from '../../reducer';
import { getSummonerInfo } from '../../../../util/util/reverseArray';
import SummonerState from '../../reducer/summoner/interface';
import { select, call, put } from 'redux-saga/effects'
import { responseGenerator } from '../../../../types';

const getStateFunc = (state: reducerType): reducerType['summoner'] => state.summoner;

const getSummonerInfoSaga = createRequestSaga(INPUT_SUMMONER_NAME, getSummonerInfo)

function* summonerSaga() {
    yield takeEvery(INPUT_SUMMONER_NAME, getSummonerInfoSaga)
}

export default summonerSaga;