import React from 'react'
export default function Menu({menuItems}) {
  return (
    <>
        <div className="header-bottom bg-white">
          <div className="container-fluid">
            <ul className='d-flex align-items-center m-0'>
              {menuItems.map((menuItem,index)=>{
                return <div className="dropdown" key={index}>
                          <button className="btn dropdown-toggle text-capitalize" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          {menuItem}
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
              })}
            </ul>
          </div>
        </div>
    </>
  )
}
