import React, { useEffect } from "react";
import { useState } from "react";
import './navBar.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const navigate = useNavigate();
    const click= (dir) => {navigate(dir);}
  


    useEffect(() => {

    if(windowSize.current[0] > 1100)
        setIsNavExpanded(true);

    }, [])
    const changeNavExpanded = () => {   
        setIsNavExpanded(!isNavExpanded);
    }
    return (
        <div className="navBar colapsible">
            <div className="navbar-Filmorama">
                <h1>Filmorama</h1>
                <i class="fa-solid fa-bars burguer" onClick={changeNavExpanded}></i>
            </div>
            {isNavExpanded && 
            <div>
                <div className="linkSearch colapsada">
                    <div className="linksPaginas">
                        <button className="" onClick={()=>click("/listContainer/0")}>INICO</button>
                        <button className="" onClick={()=>click("/listContainer/2")}>TOP</button>
                        <button className="" onClick={()=>click("/listContainer/1")}>ESTRENOS</button>
                        <button className="" onClick={()=>click("/listContainer/3")}>UP COMING</button>
                    </div>
                    <div className="navbar-Search">
                        <input type="text" placeholder="Buscar" className="navbar-Search-input"/>
                        <i class="fa-solid fa-magnifying-glass iconoBusqueda"></i>
                    </div>
                </div>
            </div>
            }
        

        </div>
    );
}
export default NavBar;