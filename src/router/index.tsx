import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainContainer from "../container/main";
import UserPage from "../components/user-page";

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainContainer/>}/>
                <Route path="/search" element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router