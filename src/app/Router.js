import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../app/Layout';
import ListContainer from '../components/listContainer/ListContainer';

const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index path="/listContainer/:catId" element={<ListContainer/>}/>
           
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Router;