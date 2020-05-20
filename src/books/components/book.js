import React, {useContext, useState} from 'react';
import "./book.scss";
import ReactTagInput from "@pathofdev/react-tag-input";
import BookContext from '../../context/IBookContext'
import {useForm} from "react-hook-form";
import uuid from 'react-uuid'

const Book = () => {
    const [tags, setTags] = useState([]);
    const {register, handleSubmit} = useForm({
        nativeValidation: true
    });
    const bookContext = useContext(BookContext);
    const onSubmit = (data, e) => {
        let uuidLocal;
        let existUUID = true;
        while (existUUID) {
            uuidLocal = uuid();
            let data = bookContext.Books.find(p => p.uuid === uuidLocal);
            existUUID = data!==undefined;
        }
        data.uuid = uuidLocal;
        data.tags = tags;
        bookContext.addBook(data);

        e.target.reset();
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="section">
                <div className="tile is-ancestor">

                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Book</p>
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Title "
                                           ref={register({required: "Please enter  Title"})}
                                           name="title"/>
                                    <p className="help is-danger">Please enter Title</p>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Book Description"
                                           ref={register({required: "Please enter  Book Description"})}
                                           name="description"/>
                                </div>
                            </div>
                            <div className="container">
                                <label className="label">Book Tags</label>
                                <ReactTagInput
                                    tags={tags}
                                    placeholder="Type and press enter"
                                    onChange={(newTags) => setTags(newTags)}

                                />
                            </div>
                            <br/>
                            <div className="field is-grouped is-grouped-centered">
                                <div className="control">
                                    <button className="button is-primary">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </form>

    );
};

export default Book;

