import React, { useState } from 'react';

interface SearchBarProps {
  onSearchTermChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');

  const onInputChange = () => {
    setTerm(term);
    onSearchTermChange(term);
  };

  return (
    <div className="search-bar">
      <input value={term} onChange={(event) => setTerm(event.target.value)} />
      <button onClick={onInputChange}>Go</button>
    </div>
  );
};

export default SearchBar;
