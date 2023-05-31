import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { news, categories, totalResults } = useSelector((state) => state.news);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Total Results Sum: {totalResults}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {news.map((item) => (
          <Link
            key={item.title}
            to={`/detail/${encodeURIComponent(item.title)}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px', width: '200px' }}
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.urlToImage}
                alt={item.title}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <p>{item.title}</p>
              <p>Total Results: {categories[item.source.name]}</p>
            </div>
          </Link>
        ))}
      </div>
      {selectedItem && (
        <div style={{ marginTop: '20px', border: '1px solid gray', padding: '10px', borderRadius: '5px', width: '400px' }}>
          <img
            src={selectedItem.urlToImage}
            alt={selectedItem.title}
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
          />
          <p>{selectedItem.title}</p>
          <p>Description: {selectedItem.description}</p>
          <p>URL: <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">{selectedItem.url}</a></p>
          <p>Content: {selectedItem.content}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
