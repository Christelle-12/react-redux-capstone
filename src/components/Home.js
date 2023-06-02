import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import styles from '../CSS/Home.module.css';

const Home = () => {
  const { news, categories, totalResults } = useSelector((state) => state.news);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.homeCont} data-testid="home">
      <div className={styles.headCont}>
        <h1 className={styles.titleN}>News</h1>
        <p>
          Total Results Sum:
          {' '}
          {totalResults}
        </p>
      </div>
      <div className={styles.homeCard}>
        {news.map((item) => (
          <div className={styles.card} key={item.title} data-testid="card">
            <Link to={`/detail/${encodeURIComponent(item.title)}`} className={styles.single_card}>
              <div
                onClick={() => handleCardClick(item)}
                onKeyDown={() => handleCardClick(item)}
                role="link"
                tabIndex={0}
                className={styles.card_content}
              >
                <div className={styles.arrow_wrapper}>
                  <span>
                    <FaArrowAltCircleRight className={styles.arrow_icon} />
                  </span>
                </div>
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className={styles.card_image}
                />
                <p className={styles.titlecd}>{item.title}</p>
                <p className={styles.titlecd}>
                  Total Results:
                  {' '}
                  {categories[item.source.name]}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className={styles.selected_item}>
          <img
            src={selectedItem.urlToImage}
            alt={selectedItem.title}
            className={styles.selected_item_image}
          />
          <p>{selectedItem.title}</p>
          <p>
            Description:
            {' '}
            {selectedItem.description}
          </p>
          <p>
            URL:
            {' '}
            <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">{selectedItem.url}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
