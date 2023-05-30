import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { news } = useSelector((state) => state.news);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <input
          type="text"
          placeholder="Search news"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <ul>
        {filteredNews.map((item) => (
          <li key={item.title}>
            <Link to={`/detail/${encodeURIComponent(item.title)}`}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
