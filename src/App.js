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
  const [inputValue, setInputValue] = useState("");
  const [searchValue,setSearchValue]=useState("")


  const allPages = Math.ceil(allData.total_count / 30);
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
    inputValue
      ? getData(
          `https://api.github.com/search/repositories?q=${inputValue}+language:all&sort=stars&order=desc&per_page=30&page=${currentPage}`
        ).then((r) => {
          setAllData(r);
          setReposList(r.items);

        })
      : getData(
          `https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=${currentPage}`
        ).then((r) => {
          setAllData(r);
          setReposList(r.items);

        });

    setLoading(false);
  }, [currentPage,inputValue]);

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
    }
    else {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <><h1>List of Repository</h1>
                                <ListOfRepository
                                    data={reposList}
                                    loading={loading}
                                    getMoreInfo={getMoreInfo}
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                    setCurrentPage={setCurrentPage}
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
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

                    <Route path="/cart" render={() => <ReposCart reposId={reposId}/>}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
