import React, {useMemo} from 'react';
import * as S from './styles';
import {useSelector} from "react-redux";
import {reducerType} from "../../../modules/redux/reducer";
import {ReverseArray} from "../../../util/util/reverseArray";

const HistoryList:React.FC = () => {
    const searchHistoryList = useSelector((state:reducerType) => state.search.searchHistoryList)

    const list = useMemo(
        () => {
            const HistroyArray = ReverseArray(searchHistoryList)
            return (
                HistroyArray.map((item, index) => (
                    <li>{item}</li>
                ))
            )
        },[searchHistoryList]
    )
    return (
        <S.Wrapper>
            {list}
        </S.Wrapper>
    )
}
export default HistoryList;