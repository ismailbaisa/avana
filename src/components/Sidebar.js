import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { DataSidebar } from './DataSidebar';
import SideMenu from './SideMenu';
import { IconContext } from 'react-icons/lib';

import './styles.scss';
import Logo from './Logo';
import Avatar from './Avatar';

export const Sidebar = (props) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#D5D5D5' }}>
        <nav className='navbar'>
            <div className='wrapper'>
                <div className='logo-wrapper'>
                    <Logo />
                </div>
                <div className='avatar-wrapper'>
                    <Avatar />
                </div>
                {DataSidebar.map((item, index) => {
                    return <SideMenu item={item} key={index} />;
                })}
            </div>
        </nav>   
        </IconContext.Provider>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
