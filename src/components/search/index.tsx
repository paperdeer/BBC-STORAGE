import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../../modules/redux/reducer";
import { setOnSearch } from "../../modules/redux/action/search";
import { useNavigate } from "react-router-dom";
import HistoryList from "./history-list";

const Search: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [onFocusInput, setOnFocusInput] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchHistoryList = useSelector((state: reducerType) => state.search.searchHistoryList)
    const onChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value)
    }
    const onClickSearchButton = () => {
        dispatch(setOnSearch(searchKeyword))
        localStorage.setItem("searchHistoryList", JSON.stringify(searchHistoryList.concat(searchKeyword)))
    }
    const onSubmitSearchKeyword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/search?username=" + searchKeyword);
        onClickSearchButton()
    }
    return (
        <S.Wrapper onSubmit={onSubmitSearchKeyword}>
            <label>
                <input onChange={onChangeSearchKeyword} value={searchKeyword} onFocus={() => setOnFocusInput(true)} onBlur={() => setOnFocusInput(false)} />
            </label>
            {onFocusInput && <HistoryList />}
        </S.Wrapper>
    )
}
export default Search