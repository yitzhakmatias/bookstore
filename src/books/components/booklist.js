import React, {useContext, useEffect, useState} from 'react';
import BookContext from "../../context/IBookContext";

import "./bookList.scss"
import BookElement from "./bookElement";


const BookList = ({props, editBook}) => {
    const bookContext = useContext(BookContext);

    const [books, setBooks] = React.useState([]);

    const [pagination, setPagination] = React.useState({
        currentPage: 1,
        pageSize: 2,
        pageNumbers: [],
        lastPage: 0
    });

    React.useEffect(() => {
        getData();
    }, [pagination.currentPage]);

    const getData =  () => {
        const indexOfLastTodo = pagination.currentPage * pagination.pageSize;
        const indexOfFirstTodo = indexOfLastTodo - pagination.pageSize;
        setBooks(bookContext.Books.slice(indexOfFirstTodo, indexOfLastTodo));
        pageNumberList(bookContext.Books);
    };
    const pageNumberList = (books) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(books.length / pagination.pageSize); i++) {
            pageNumbers.push(i);
        }
        setPagination({
            ...pagination,
            lastPage: pageNumbers.length - 1 > 0 ? pageNumbers.length : 0,
            pageNumbers: pageNumbers
        })

    };

    const renderPageNumbers = pagination.pageNumbers.map(number => {
        return (

            <li>
                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page" id={number}
                   onClick={() => setPagination({
                       ...pagination, currentPage: Number(number)
                   })}>{number}</a>
            </li>
        );
    });
    const itemRows = books.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map(book => (
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
                <a className="pagination-previous" title="This is the first page"
                   onClick={() => setPagination({
                       ...pagination, currentPage: pagination.currentPage - 1 > 1 ? pagination.currentPage - 1 : 1
                   })}
                >Previous</a>
                <a className="pagination-next" onClick={() => setPagination({
                        ...pagination,
                        currentPage: pagination.currentPage + 1 < pagination.lastPage ? pagination.currentPage + 1 : pagination.lastPage
                    }
                )}>Next page</a>
                <ul className="pagination-list">
                    {renderPageNumbers}
                </ul>
            </nav>
        </div>);
};

export default BookList;
