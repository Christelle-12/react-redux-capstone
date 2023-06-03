import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FaArrowAltCircleRight } from 'react-icons/fa';
import styles from '../CSS/Home.module.css';

const Home = () => {
  const { news, categories, totalResults } = useSelector((state) => state.news);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('');

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filterNews = news.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className={styles.homeCont} data-testid="home">
      <div className={styles.headCont}>
        <h1 className={styles.titleN}>News</h1>
        <div>
          <p className={styles.total}>
            Total Results :
          </p>
          <p>{totalResults}</p>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter news..."
            className={styles.filterInput}
          />
        </div>
      </div>
      <div className={styles.homeCard}>
        {filterNews.map((item) => (
          <div className={styles.card} key={item.title} data-testid="card">
            <Link
              to={`/detail/${encodeURIComponent(item.title)}`}
              className={styles.single_card}
            >
              <div
                onClick={() => handleCardClick(item)}
                onKeyDown={() => handleCardClick(item)}
                role="link"
                tabIndex={0}
                className={styles.card_content}
              >
                <div className={styles.arrow_wrapper}>
                  <span className={styles.arrow_icon}>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26 26"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" fill="white" />
                    </svg>
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.card_image}
                />
                <p className={styles.titlecd}>{item.title}</p>
                <p className={styles.titlecd}>
                  <p className={styles.total}>Results:</p>
                  <br />
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
            {selectedItem.description}
          </p>
          <p>
            URL:
            {' '}
            <a
              href={selectedItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedItem.url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
