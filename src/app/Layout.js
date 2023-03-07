import React from "react";
import NavBar from '../components/NavBar/navBar';
import Footer from '../components/Footer/footer';
import Provider from './Provider';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <NavBar/>
            <Outlet className="container-general"></Outlet>
            <Footer/>
        </div>

    )
}
export default Layout;

