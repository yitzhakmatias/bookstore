import React, {useContext, useEffect, useState} from 'react';
import BookContext from "../../context/IBookContext";
import Pagination from "react-paginating";
const BookList = ({handelOnCheck}) => {
    const bookContext = useContext(BookContext);

    const item = bookContext.Books.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map((book, i) => (
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
                                            <input type="checkbox" onChange={handelOnCheck} id={book.uuid}/>
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

    return (
        <div>
            <label className="label">Select a book(s) </label>
            <ul>
                {item}
            </ul>
        </div>
    );
};

export default BookList;
