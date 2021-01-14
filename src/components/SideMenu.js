import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

export const SideMenu = ({item, display, dispatch, menuid }) => {
    return (
        <>
            <div>
                <div >{ item.isShowed &&
                    <Link className={ item.isAllowed ? 'sidebar' : 'side-disabled'} 
                        to={'/' + item.id} 
                        onClick={() => dispatch({type: 'TOGGLER', payload: item.id})}>
                            {item.id} 
                        <span className='icons'>
                            { 
                                item.id === menuid && item.childs && display
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
                { display && item.childs && item.isShowed && item.id === menuid &&
                    item.childs.map((item, index) => {
                    return (
                        <div>
                            { item.isShowed && item.isAllowed &&
                                <Link className="dropdown" to={item.id} key={index}>
                                    <div className={ item.isAllowed ? 
                                        "sub-sidebar" : "dropdown-disabled"}>
                                        {item.id} 
                                        <hr/>
                                    </div>
                                </Link>
                            }  
                        </div>
                    );
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        display: state.display,
        menuid: state.menuid
    };
};


export default connect(mapStateToProps)(SideMenu)
