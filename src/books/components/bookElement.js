import React from 'react';
import Moment from "react-moment";

const BookElement = (props) => {
    return (
        <div>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src={props.book.imageURL} alt="Image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <div className="tags ">
                                {props.book.tags.map(item=>{
                                    return <span className="tag is-info  is-normal" key={item.uuid}>{item}</span>;
                                })
                                }
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                <strong>{props.book.title}</strong> <small> <Moment>{props.book.createdDate}</Moment></small> <small>31m</small>
                                <br/>
                                {props.book.description}
                            </p>
                        </div>
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">

                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="buttons">
                                        <div className="buttons">
                                            <button className="button is-primary" onClick={props.editBook}>Edit</button>
                                            <button className="button is-danger" onClick={props.deleteBook}>Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>

                </article>

            </div>
        </div>
    );
};

export default BookElement;
