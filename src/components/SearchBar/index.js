import React from 'react';

const SearchBar = ({
  filterText,
  onUserInput,
}) => {
  return (
    <input onChange={e => onUserInput(e.target.value)} value={filterText} />
  )
};

export default SearchBar
