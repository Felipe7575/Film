import React from "react";
import './footer.css'
import imgThmb from '../../assets/blue_square.svg'
const Footer = () => {
    return (
        <div className="footer-container">
            <img src={imgThmb} alt="imgThmb" className="imgThmb" />
            <div className=" nosotros">
                <h1 className="tituloFooter">SOBRE NOSOTROS</h1>
                <h2>Sobre Filomorama</h2>
                <h2>Contáctanos</h2>
            </div>
            <div className=" politicas">
                <h1 className="tituloFooter">POLITICAS</h1>
                <h2>Políticas de privacidad</h2>
                <h2>Políticas de cookies</h2>
                <h2>Políticas de uso</h2>
            </div>
            <div className=" sociales">
                <h1 className="tituloFooter">REDES SOCIALES</h1>
                <h2>Instagram</h2>
                <h2>Facebook</h2>
                <h2>Twitter</h2>
            </div>
        </div>
    );
}
export default Footer;