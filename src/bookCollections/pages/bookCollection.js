import React, {Component, useContext, useState} from 'react';
import NewBookCollection from "../component/form";
import CollectionList from "../component/collectionList";
import BookContext from "../../context/IBookContext";

const BookCollection = () => {
    const [id, setBookIdCollection] = useState({});
    const bookContext = useContext(BookContext);

    function editListOfBooks(id) {

        console.log("asdfasdfsadf");
        let collection = bookContext.bookList.filter(p => p.id === id)[0];

        setBookIdCollection(collection.id);
    }

    return (
        <section className="section">
            <div className="tile is-ancestor">
                <div className="tile is-parent is-3">
                    <CollectionList editListOfBooks={editListOfBooks}/>
                </div>
                <div className="tile is-parent ">
                    <article className="tile is-child box">
                        <p className="title">Add New Book Collection</p>
                        <p className="subtitle">With some content</p>
                        <NewBookCollection id={id}/>
                    </article>
                </div>
            </div>
        </section>);

}

export default BookCollection;
