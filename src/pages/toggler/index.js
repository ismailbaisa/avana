import React from 'react'
import '../styles/styles.scss';
import { connect } from 'react-redux';
import * as MdIcons from 'react-icons/md';

export const Toggler = ({DataSidebar = [], dispatch}) => {
  return ( 
      <> 
      <div className='toggler'>
          <table className='table' >
          <thead>
              <tr>
                <th>Child Data</th>
                <th>ID</th>
                <th>Show</th>
                <th>Allow</th>
              </tr>
              </thead>
              <tbody>
              {DataSidebar.map((item, index) => {                
                return ( 
                <tr item={item} key={index} >
                  { item.id !== 'toggler' ?
                    <> 
                    <td>{item.childs ? item.iconClosed : ''}</td>
                    <td>{item.id}</td>
                    <td>
                          <button className={item.isShowed ? 'on' : 'off'}  onClick={() => dispatch({type: 'SHOWER', payload: 
                            {show: item.isShowed,
                              id: item.id
                            }})}>{item.isShowed ? 'ON' : 'OFF'}</button>
                          </td>
                          <td>
                          <button className={item.isAllowed ? 'on' : 'off'}   onClick={() => dispatch({type: 'ALLOWER', payload: 
                            {show: item.isAllowed,
                              id: item.id
                            }})}>{item.isAllowed ? 'ON' : 'OFF'}</button>
                    </td>
                    </>
                  : ''}
                </tr>
                  )
                  })
                }
                </tbody>
          </table>
          </div>
      </>
  )
}
const mapStateToProps = state => {
  return {
      DataSidebar: state.DataSidebar,
  };
};


export default connect(mapStateToProps)(Toggler)