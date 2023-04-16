//configuração das rotas*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage.js"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import CommentsPage from "../pages/CommentsPage/CommentsPage"
const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/posts" element={<PostPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;