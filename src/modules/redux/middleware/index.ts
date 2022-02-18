import { all } from "redux-saga/effects";
import summonerSaga from "./summoner";
export default function* rootSaga() {
    yield all([
        summonerSaga(),
    ]);
}