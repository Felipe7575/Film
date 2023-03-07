import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../app/Layout';

const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
           
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Router;