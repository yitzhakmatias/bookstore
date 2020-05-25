import React, {Component} from 'react';
import NewBookCollection from "../component/form";
import CollectionList from "../component/collectionList";

class BookCollection extends Component {
    render() {
        return (
            <section className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Add New Book Collection</p>
                            <p className="subtitle">With some content</p>
                            <NewBookCollection/>
                        </article>
                    </div>
                    <div className="tile is-parent is-7">
                        <CollectionList/>

                    </div>
                </div>
            </section>);
    }
}

export default BookCollection;
