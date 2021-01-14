import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

export const SideMenu = ({item, display, toggler }) => {
    return (
        <>
            <div>
                <div >{ item.isShowed &&
                    <Link className={ item.isAllowed ? 'sidebar' : 'side-disabled'} 
                        to={'/' + item.id} 
                        onClick={ item.childs && item.isAllowed && toggler }>
                            {item.id}
                        <span className='icons'>
                            { 
                                item.childs && display
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
                { display && item.childs && item.isShowed &&
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
        display: state.display
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggler: () => dispatch({type: 'TOGGLER'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
