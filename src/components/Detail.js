import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { title } = useParams();
  const { news } = useSelector((state) => state.news);

  // Find the news item that matches the title parameter
  const selectedNews = news.find((item) => item.title === decodeURIComponent(title));

  return (
    <div>
      {selectedNews ? (
        <div>
          <h1>{selectedNews.title}</h1>
          <img src={selectedNews.urlToImage} alt={selectedNews.title} />
          <p>Description: {selectedNews.description}</p>
          <p>URL: <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">{selectedNews.url}</a></p>
          <p>Content: {selectedNews.content}</p>
        </div>
      ) : (
        <p>News not found.</p>
      )}
    </div>
  );
};

export default Detail;
