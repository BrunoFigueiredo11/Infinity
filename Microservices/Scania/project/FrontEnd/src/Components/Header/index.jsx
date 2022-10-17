import React from 'react';
import Logo from '../../Imgs/infinityCompany.png';

import './style.css';

export default function Header() {
    
    return(
        <header id='header'>
            <img src={Logo} alt="Logo oficial da Infinity Inc." />
        </header>
    )
}
