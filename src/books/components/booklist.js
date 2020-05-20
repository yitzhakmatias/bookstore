import React, {useContext} from 'react';
import BookContext from "../../context/IBookContext";

const BookList = () => {
    const bookContext = useContext(BookContext);

    const rows = bookContext.Books.map(book => (
        <React.Fragment key={book.uuid}>
            <tr>
                <td>{book.uuid}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>{book.tags}</td>
            </tr>
        </React.Fragment>

    ));
    return (
        <table className="table">
            <thead>
            <tr>
                <th><abbr title="UUID">UIID</abbr></th>
                <th><abbr title="Title">title</abbr></th>
                <th><abbr title="Description">Description</abbr></th>
                <th><abbr title="Tags">Tags</abbr></th>
            </tr>
            </thead>

            <tbody>
            {rows}

            </tbody>
        </table>
    );
};

export default BookList;
