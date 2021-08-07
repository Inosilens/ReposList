import "./App.css";
import "bootstrap-css";

import { getData } from "./services/getRepos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ReposCart from "./components/peposCart/reposCart";
import { ListOfRepository } from "./components/main/listOfRepository";
import { createPages } from "./services/pagination";
import { searchRepository } from "./services/searchRepository";
import paginationNavLinks from "./components/pagination/paginationNavLinks";
import PaginationNavLinks from "./components/pagination/paginationNavLinks";

function App() {
  const [allData, setAllData] = useState([]);
  const [reposList, setReposList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reposId, setReposId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const allPages = Math.ceil(allData.total_count / 30);
  const pages = [];
  createPages(pages, allPages, currentPage);

  useEffect(() => {
    setLoading(true);
    if (inputValue) {
      searchRepository(
        `https://api.github.com/search/repositories?q=${inputValue}+language:all&sort=stars&order=desc&per_page=30&page=${currentPage}`
      ).then((r) => {
        setAllData(r);
        setReposList(r.items);
        setLoading(false);
      });
    } else {
      getData(
        `https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=${currentPage}`
      ).then((r) => {
        setAllData(r);
        setReposList(r.items);
        setLoading(false);
      });
    }
  }, [currentPage, inputValue]);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  const getMoreInfo = (id) => setReposId([id]);

  if (loading) {
    return (
      <div className="Loading">
        <div className="windows8">
          <div className="wBall" id="wBall_1">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_2">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_3">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_4">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_5">
            <div className="wInnerBall" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pt-3">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <h1 className="title">List of Repository</h1>
                  <ListOfRepository
                    data={reposList}
                    loading={loading}
                    getMoreInfo={getMoreInfo}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setCurrentPage={setCurrentPage}
                  />
                  <PaginationNavLinks
                    pages={pages}
                    loading={loading}
                    changePage={changePage}
                    currentPage={currentPage}
                  />
                </>
              )}
            />

            <Route
              path="/cart"
              render={() => <ReposCart reposId={reposId} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
