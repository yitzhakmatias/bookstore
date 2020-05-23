import React, {useContext, useEffect, useState} from 'react';
import BookContext from "../../context/IBookContext";

import "./bookList.scss"
import BookElement from "./bookElement";


const BookList = ({props, editBook}) => {
    const bookContext = useContext(BookContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState(()=>{
        let pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bookContext.count / 5); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    });


    const handleClick = (event) => {
        console.log(event.target.id);
        setCurrentPage(Number(event.target.id));
    };

    useEffect(() => {
      //  console.log("paginations");
       // updatePages();
    }, []);

    const updatePages = () => {
        for (let i = 1; i <= Math.ceil(bookContext.count / 5); i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
    };
    const renderPageNumbers = pageNumbers.map(number => (
        <React.Fragment  key={number}>
            <li
                key={number}
                id={number}

            >
                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page"   id={number} onClick={handleClick}>{number}</a>
            </li>
        </React.Fragment>
    ));
    const itemRows = bookContext.Books.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map(book => (
        <React.Fragment key={book.uuid}>
            <li><BookElement book={book} editBook={() => editBook(book.uuid)}
                             deleteBook={() => bookContext.deleteBook(book.uuid)}/></li>
        </React.Fragment>
    ));

    return (
        <div className="">

            <ul className="block-list is-small">
                {itemRows}
            </ul>

            <nav className="pagination" role="navigation" aria-label="pagination">
                <a className="pagination-previous" title="This is the first page" disabled>Previous</a>
                <a className="pagination-next">Next page</a>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </nav>
        </div>);
};

export default BookList;
