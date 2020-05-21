import React, {useState} from 'react';

import BookList from '../components/booklist'
import ModalBook from "../components/modalBook";
import Book from "../components/book";


const Books = () => {
    const [showModal, setShowModal] = useState(false)

    const inputChangeHandler = (uuid) => {
        console.log(uuid);
        setShowModal(true);

    };
    const handleVisibility = () => {
        setShowModal(false);
    };
    return (

        <section className="section">
            <div className="tile is-ancestor">
                <div className="tile is-3 is-vertical is-parent">
                    <div className="tile is-child box">
                        <p className="title">New Book</p>
                        <Book />
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        {showModal ?
                            <ModalBook isVisible={() => handleVisibility()}/>
                            : null}

                        <article className="panel is-primary">
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
                                <BookList editBook={inputChangeHandler}></BookList>
                            </div>

                        </article>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Books;
