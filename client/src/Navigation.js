import React from 'react'
import {Link} from 'react-router-dom'
import './LogoClass.css';
import Logo from './Logo.JPG';
import './Navigation.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return <div>
        <div className="navbar">
            <img className="LogoClass" src={Logo}/>

            <a href="/">Explore Degrees</a>
            <a href="/CareerOptions">Career Options</a>

        </div>
    </div>
}
export default Navigation