import React, {useContext} from 'react';
import BookContext from "../../context/IBookContext";
import Checkbox from "./checkbox";

const BookList = ({handelOnCheck, collectionList}) => {

    const [books, setBooks] = React.useState([]);
    const [selectedBooks, setSelectedBooks] = React.useState([]);

    const bookContext = useContext(BookContext);


    const [pagination, setPagination] = React.useState({
        currentPage: 1,
        pageSize: 5,
        pageNumbers: [],
        lastPage: 0
    });

    React.useEffect(() => {
        getData();

        console.log(selectedBooks);
    }, [pagination.currentPage, collectionList]);

    const getData = () => {
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


    const isChecked = uuid => {

        console.log(collectionList);
        if (collectionList.length === 0) return false;
        let data = collectionList.find(p => p.id === uuid);
        if (data === undefined) return false;
        return data.checked;
    };
    const item = books.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map((book, i) => (
            <li key={i}>
                <React.Fragment key={book.uuid}>
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={book.imageURL} alt="Image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{book.title}</strong>
                                        <br/>
                                        <label className="checkbox">
                                            <input type="checkbox"
                                                   onChange={handelOnCheck}
                                                   id={book.uuid}
                                                   checked={isChecked(book.uuid)}
                                            />
                                            {book.uuid}
                                        </label>

                                    </p>
                                </div>
                            </div>
                        </article>

                    </div>
                </React.Fragment>
            </li>
        )
    );
    const renderPageNumbers = pagination.pageNumbers.map((number, index) => {
        return (

            <li key={index}>
                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page" id={number}
                   onClick={() => setPagination({
                       ...pagination, currentPage: Number(number)
                   })}>{number}</a>
            </li>
        );
    });
    return (
        <div>
            <label className="label">Select a book(s) </label>
            <ul>
                {item}
            </ul>
            <nav className="pagination" role="navigation" aria-label="pagination">
                <a className="pagination-previous" title="This is the first page"
                   onClick={() => setPagination({
                       ...pagination, currentPage: pagination.currentPage - 1 > 1 ? pagination.currentPage - 1 : 1
                   })}
                >Previous</a>
                <a className="pagination-next"
                   onClick={() => setPagination({
                           ...pagination,
                           currentPage: pagination.currentPage + 1 < pagination.lastPage ? pagination.currentPage + 1 : pagination.lastPage
                       }
                   )}
                >Next page</a>
                <ul className="pagination-list">
                    {renderPageNumbers}
                </ul>
            </nav>

        </div>
    );
};

export default BookList;
