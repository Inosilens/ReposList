import React from "react";

const PaginationNavLinks = ({changePage,loading,pages,currentPage}) => {


    return (
        <nav className={loading ? "pageOff" : "pages"}>
            <ul className="pagination">
                {pages.map((item, index) =>
                    <li key={index} className="page-item m-3">
                        <a className={currentPage===index+1?"page-link current":"page-link"} onClick={() => changePage(item)}
                           href="#">{item}
                        </a>
                    </li>)}
            </ul>
        </nav>)


}

export default PaginationNavLinks

