import React from 'react';

const Search = () =>{
return (
  <div className='search-box w-25 d-flex'>
    <input className="form-control pe-4" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn search-btn p-0" type="submit">
      <i className="material-symbols-outlined fw-bold">search</i>
    </button>
  </div>
  )
}
export default Search;