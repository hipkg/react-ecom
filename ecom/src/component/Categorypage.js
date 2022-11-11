import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Category() {
  const location = useLocation();
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"45.8vh"}}>
        <img src="https://i.pinimg.com/originals/54/ea/25/54ea256fa2e7619e590706779988f51c.gif" alt="Cart Emoji" height={"200px"} />
        <h1>{location.state.data}</h1>
    </div>
  )
}
