import React, {useContext} from 'react';
import BookContext from "../../context/IBookContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';


const CollectionList = ({editListOfBooks}) => {
    const bookContext = useContext(BookContext);

    const items = bookContext.bookList.map((book, i) => (
        <li key={i}>
            <a className="panel-block is-active" onClick={() => editListOfBooks(book.id)}>
             <span className="panel-icon">
                  <i><FontAwesomeIcon icon={faBook}/></i>
             </span>
                {book.name}
            </a>
        </li>
    ));
    return (
        <article className="tile is-child box panel is-primary">
            <p className="panel-heading">
                Collection List
            </p>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-primary" type="text" placeholder="Search"/>
                    <span className="icon is-left">
                     <i className="fas fa-search" aria-hidden="true"> </i>
                     </span>
                </p>
            </div>
            <ul>
                {items}
            </ul>


        </article>
    );
};

export default CollectionList;
