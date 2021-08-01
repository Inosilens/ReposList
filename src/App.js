import "./App.css";
import { getData } from "./services/getRepos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ReposCart from "./components/peposCart/reposCart";
import { ListOfRepository } from "./components/main/listOfRepository";
import {createPages} from "./components/pagination";

function App() {
  const [allData, setAllData] = useState([]);
  const [reposList, setReposList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const allPages = Math.ceil(allData.total_count/allData.items.length)
    console.log(allPages)
  const pages = []
  createPages(pages,allPages,currentPage)

  useEffect(() => {
    getData().then((r) => {
      setAllData(r);
      setReposList(r.items);
    });
  }, []);

 const changePage = (page) => {
     setCurrentPage(page)

  }
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <ListOfRepository data={reposList} />
              <div className="pages">
              {pages.map((item,index)=>
              <div onClick={()=>changePage(item)} className={currentPage===item?"active" : "page" } key={index}>{item}</div>)}
              </div>



            </>
          )}
        />

        <Route path="/favorites" render={() => <ReposCart />} />
      </Switch>
    </Router>
  );
}

export default App;
