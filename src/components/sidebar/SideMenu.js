import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';

export const SideMenu = ({item = [], dispatch, menuid }) => {
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
                                item.id === menuid && item.childs                              ///ARROW TOGGLER
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
                {   item.childs && item.isShowed && item.id === menuid &&
                    item.childs.map((child, index) => {
                        return (
                            <div>
                                { child.isShowed && child.isAllowed &&
                                    <Link className="dropdown" to={ item.id + '-' + child.id} key={index}>      
                                        <div className={ child.isAllowed ?                     //CHILDREN DROPDOWN
                                            "sub-sidebar" : "dropdown-disabled"}>                          
                                            {child.id.replace(/[^a-zA-Z0-9]/g, ' ')} 
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
        menuid: state.menuid,
        DataSidebar: state.DataSidebar
    };
};

export default connect(mapStateToProps)(SideMenu)
