import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
    INPUT_SUMMONER_NAME
} from '../../action/summoner/interface';
import { takeEvery } from 'redux-saga/effects'
import { getSummonerInfo } from '../../../../util/util/reverseArray';

const getSummonerInfoSaga = createRequestSaga(INPUT_SUMMONER_NAME, getSummonerInfo)

function* summonerSaga() {
    yield takeEvery(INPUT_SUMMONER_NAME, getSummonerInfoSaga)
}

export default summonerSaga;