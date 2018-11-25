import React from 'react';

const SearchGiphy = (props) => {

  return(
    <form onSubmit={props.searchData}>
      <input type='text' name='search' placeholder="Search Giphy's" />
      <button>Search</button>
    </form>
  )
}

export default SearchGiphy;
