import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../CSS/Detail.module.css';

const Detail = () => {
  const { title } = useParams();
  const { news, categories } = useSelector((state) => state.news);

  const selectedItem = news.find((item) => item.title === title);
  const totalResult = selectedItem ? categories[selectedItem.source.name] : 0;

  return (
    <div className={styles.detailCont}>
      {selectedItem ? (
        <div className={styles.myCont}>
          <h2 className={styles.title}>{selectedItem.title}</h2>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <div className={`${styles.tile} ${styles.author}`}>
            <h3>Source:</h3>
            <p>{selectedItem.source.name}</p>
          </div>
          <div className={`${styles.tile} ${styles.description}`}>
            <h3>Description:</h3>
            <p>{selectedItem.description}</p>
          </div>
          <div className={styles.tile}>
            <h3>URL:</h3>
            <a
              href={selectedItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Readmore about the article
            </a>
          </div>
          <p>
            Results:
            {totalResult}
          </p>
        </div>
      ) : (
        <div>
          <p>Card not present</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
