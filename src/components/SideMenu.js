import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

export const SideMenu = ({item}) => {
    return (
        <>
        <div>
            <div>{ item.isShowed &&
                <Link className='sidebar' to={'/' + item.id}>
                    {item.id}
                <span className='icons'>
                    { 
                        item.childs && false
                        ? item.iconOpened
                        : item.childs
                        ? item.iconClosed
                        : null 
                    }
                </span>    
                </Link> 
                }
                
            </div>
           
        </div>
        {item.childs &&
                item.childs.map((item, index) => {
                return (
                    <div to={item.path} key={index}>
                    {item.icon}
                    <div>{item.title}</div>
                    </div>
                );
        })}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      display: state.display
    };
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
