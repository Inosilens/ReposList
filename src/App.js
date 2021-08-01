import "./App.css";
import { getData } from "./services/getRepos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ReposCart from "./components/peposCart/reposCart";
import { ListOfRepository } from "./components/main/listOfRepository";
import { createPages } from "./components/pagination";

function App() {
  const [allData, setAllData] = useState([]);
  const [reposList, setReposList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reposId, setReposId] = useState(null);

  const allPages = Math.ceil(allData.total_count / 30);
  console.log(allPages);
  const pages = [];
  createPages(pages, allPages, currentPage);

  useEffect(() => {
    setLoading(true);
    getData(
      "https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1"
    ).then((r) => {
      setAllData(r);
      setReposList(r.items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getData(
      `https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=${currentPage}`
    ).then((r) => {
      setAllData(r);
      setReposList(r.items);
      setLoading(false);
    });
  }, [currentPage]);
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const getMoreInfo = (id) => setReposId([id]);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <ListOfRepository
                data={reposList}
                loading={loading}
                getMoreInfo={getMoreInfo}
              />

              <div className={loading ? "pageOff" : "pages"}>
                {pages.map((item, index) => (
                  <div
                    onClick={() => changePage(item)}
                    className={currentPage === item ? "current" : "page"}
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
        />

        <Route path="/cart" render={() => <ReposCart reposId={reposId} />} />
      </Switch>
    </Router>
  );
}

export default App;
