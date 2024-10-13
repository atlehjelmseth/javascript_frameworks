import React, { useState } from 'react';

const SearchBar = ({ posts, setSearchedPosts }) => {
  const [query, setQuery] = useState('');

  const searchProducts = (event) => {
    const input = event.target.value;
    setQuery(input);

    if (input) {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(input.toLowerCase())
      );
      setSearchedPosts(filtered);
    } else {
      setSearchedPosts(posts);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={searchProducts}
      />
    </div>
  );
};

export default SearchBar;
