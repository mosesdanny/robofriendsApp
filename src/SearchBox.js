import React from 'react';

const SearchBox = ({changeMethod}) => {
  return (
    <div className='p2'>
      <input 
	  className='pa3 ba b--green bg-lightest-blue'
	  type='search' 
	  placeholder='search robots' 
	  onChange={changeMethod}
	  />
    </div>	  
  );
}
export default SearchBox ;