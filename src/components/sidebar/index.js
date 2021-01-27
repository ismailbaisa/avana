import React from 'react'
import SideMenu from './SideMenu';
import { IconContext } from 'react-icons/lib';
import '../styles/styles.scss';
import Logo from '../images/Logo';
import { connect } from 'react-redux';
import Avatar from '../images/Avatar';

export const Sidebar = ({DataSidebar = []}) => {
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
                        {DataSidebar.map((item, index) => {                 ///MAPPING FROM MOKCUP JSON
                            return <SideMenu item={item} key={index}/>;  
                        })}
                    </div>
                </nav>
            </IconContext.Provider> 
        </>
    )
}
const mapStateToProps = state => {
    return {
        DataSidebar: state.DataSidebar,
    };
};

export default connect(mapStateToProps)(Sidebar)