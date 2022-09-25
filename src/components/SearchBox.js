import React from 'react';

const searchBox = ({setSearchValue}) => {
  return (
    <div className='col col-sm-4'>
        <input className='form-control' placeholder='Type to search' type="text" onChange={(e)=> {setSearchValue(e.target.value)}}/>
    </div>
  )
}

export default searchBox;