import React, {useContext} from 'react';
import BookContext from "../../context/IBookContext";
import Moment from "react-moment";
import "./bookList.scss"
import BookElement from "./bookElement";


const BookList = ({props, editBook}) => {
    const bookContext = useContext(BookContext);
    let dateToFormat;
    const edit = (uuid) => {

    };
    const rows = bookContext.Books.map(book => (

        <React.Fragment key={book.uuid}>
            <tr>
                <td>{book.uuid}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>{book.tags}</td>
                <td><Moment>{dateToFormat}</Moment></td>
                <td>
                    <div className="buttons">
                        <button className="button is-primary" onClick={() => editBook(book.uuid)}>Edit</button>
                        <button className="button is-danger" onClick={() => bookContext.deleteBook(book.uuid)}>Remove
                        </button>
                    </div>

                </td>
            </tr>

        </React.Fragment>

    ));
    const itemRows = bookContext.Books.map(book => (
        <React.Fragment key={book.uuid}>
            <li><BookElement book={book} editBook={() => editBook(book.uuid)} deleteBook={()=> bookContext.deleteBook(book.uuid)}/></li>
        </React.Fragment>
    ));
    dateToFormat = (book) => book.createdDate;
    return (
        <div className="">

            <ul className="block-list is-small">
                {itemRows}
            </ul>

        </div>);
};

export default BookList;
