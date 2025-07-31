import React from 'react'
// importing image asset
import chefClaudeLogo from '../assets/chef-claude-icon.png';

function Header() {
    return (
        <header className='header'>
            <img src={chefClaudeLogo} alt="Chef Claude" />
            <span>Chef Claude</span>
        </header>
    );
}

export default Header;