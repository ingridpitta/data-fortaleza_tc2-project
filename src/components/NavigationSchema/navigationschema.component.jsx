import React from "react";
import { Link } from 'react-router-dom'
import "./navigationschema.styles.scss";

const NavigationSchema = () => (
    <div className="navigationSchema">
        <ul>
            <Link to='/home'><li id="selected">Início</li></Link>
            <Link to='/forum'><li>Fórum</li></Link>
            <Link to='/opine'><li>Opine</li></Link>
            <Link to='/resultados'> <li>Resultados</li></Link>
            <Link to='/mapasinterativos'><li>Mapas Interativos</li></Link>
            <Link to='/pontos'><li>Troque seus Pontos</li></Link>
            <Link to='/denuncie'><li>Denuncie</li></Link>
        </ul>
    </div>
)

export default NavigationSchema