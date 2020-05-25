import React, {useContext} from 'react';
import BookContext from "../../context/IBookContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


const CollectionList = () => {
    const bookContext = useContext(BookContext);
    const items = bookContext.bookList.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map((book, i) => (
        <a className="panel-block is-active">
             <span className="panel-icon">
                  <i><FontAwesomeIcon icon={faBook}/></i>
             </span>
            {book.name}
        </a>
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
            {items}

        </article>
    );
};

export default CollectionList;
