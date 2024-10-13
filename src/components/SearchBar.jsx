import React, { useState } from 'react';

const SearchBar = ({ posts, setFilteredPosts }) => {
  const [query, setQuery] = useState('');

  const handle = (event) => {
    const input = event.target.value;
    setQuery(input);

    if (input) {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={handle}
      />
    </div>
  );
};

export default SearchBar;
