import React from 'react';

import Navbar from './Navbar'

function Layout (props) {
  let data = {
    id: 265485,
    username: 'Rich'
  }
  return(
    <React.Fragment>
      <Navbar log="true" data={data}/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout