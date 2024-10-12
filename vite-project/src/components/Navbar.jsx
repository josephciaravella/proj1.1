import React from 'react';

import logo from '../assets/react.svg'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img className='nav-logo-img' src={logo} alt='' />
            <h3 className='nav-logo-title'>ReactFacts</h3>
            <h4 className='nav-desc'>React Course - Project 1</h4>
        </nav>
    )
}