import React from 'react';
import Book from "./book";

const ModalBook = ({book,isVisible}) => {
    return (
        <div className="modal  is-active">
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Book</p>
                    <button className="delete" aria-label="close" onClick={()=>isVisible()}/>
                </header>
                <section className="modal-card-body">
                   <Book book={book} save={()=>isVisible()}/>
                </section>
            </div>
        </div>

    );
};

export default ModalBook;
