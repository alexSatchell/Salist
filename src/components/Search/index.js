import React, { useState } from 'react';
import { Input } from './styles';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='search..'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
