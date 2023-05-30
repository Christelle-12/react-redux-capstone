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
          {selectedNews.imageUrl && (
            <img src={selectedNews.imageUrl} alt={selectedNews.title} />
          )}
          <p>{selectedNews.description}</p>
        </div>
      ) : (
        <p>News not found.</p>
      )}
    </div>
  );
};

export default Detail;
