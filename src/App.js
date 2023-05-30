import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { fetchNews } from "./redux/Home/newsSlice";

const App = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error occurred while fetching news.</p>}
    </Router>
  );
};

export default App;
