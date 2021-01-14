import React from 'react'
import { DataSidebar } from './DataSidebar';
import SideMenu from './SideMenu';
import { IconContext } from 'react-icons/lib';

import './styles.scss';
import Logo from './Logo';
import Avatar from './Avatar';

export default function Sidebar() {
    return ( 
        <> 
            <IconContext.Provider value={{
                color: '#D5D5D5'
            }}>
                <nav className='navbar'>
                    <div className='wrapper'>
                        <div className='logo-wrapper'>
                            <Logo/>
                        </div>
                        <div className='avatar-wrapper'>
                            <Avatar/>
                        </div>
                        {DataSidebar.map((item, index) => {
                            return <SideMenu item={item} key={index}/>;
                        })}
                    </div>
                </nav>
            </IconContext.Provider> 
        </>
    )
}
