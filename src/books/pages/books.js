import React, {useContext, useState} from 'react';

import BookList from '../components/booklist'
import ModalBook from "../components/modalBook";
import Book from "../components/book";
import BookContext from "../../context/IBookContext";


const Books = () => {
    const [showModal, setShowModal] = useState(false);
    const [book, setBook] = useState({});
    const bookContext = useContext(BookContext);

    const inputChangeHandler = (uuid) => {
        let book = bookContext.Books.find(p => p.uuid === uuid);
        setBook(book);
        setShowModal(true);
    };
    const handleVisibility = () => {

        setShowModal(false);
    };
    return (

        <section className="section">
            <div className="tile is-ancestor">
                <div className="tile is-3 is-vertical is-parent">

                    <Book/>
                </div>
                <div className="tile is-parent">
                        {showModal ?
                            <ModalBook book={book} isVisible={() => handleVisibility()}/>
                            : null}

                        <article className="panel is-primary has-background-white">
                            <p className="panel-heading">
                                Book List
                            </p>

                            <div className="panel-block">
                                <p className="control has-icons-left">
                                    <input className="input is-primary" type="text" placeholder="Search"/>
                                    <span className="icon is-left">
                     <i className="fas fa-search" aria-hidden="true"> </i>
                     </span>
                                </p>
                            </div>
                            <div className="panel-block">
                                <BookList editBook={inputChangeHandler}/>
                            </div>

                        </article>

                </div>
            </div>

        </section>

    );
};

export default Books;
