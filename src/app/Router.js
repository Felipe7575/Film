import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../app/Layout';
import ListContainer from '../components/listContainer/ListContainer';
import FilmDetail from '../components/FilmDetail/FilmDetail';

const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route  path="/listContainer/0" element={<ListContainer/>}/>
                <Route  path="/listContainer/:catId" element={<ListContainer/>}/>
                <Route  path="/filmDetail/:filmId" element={<FilmDetail/>}/>
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Router;