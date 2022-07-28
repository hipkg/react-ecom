import React from 'react'
export default function Menu({menuItems}) {
  return (
    <>
        <div className="header-bottom bg-white">
          <div className="container-fluid">
            <ul className='d-flex align-items-center m-0'>
              {menuItems.map((menuItem)=>{
                return <> 
                        <div class="dropdown">
                          <button class="btn dropdown-toggle text-capitalize" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          {menuItem}
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </>
              })}
            </ul>
          </div>
        </div>
    </>
  )
}
