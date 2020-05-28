import React, {useContext, useEffect, useState} from 'react';
import "./book.scss";
import ReactTagInput from "@pathofdev/react-tag-input";
import BookContext from '../../context/IBookContext'
import {useForm} from "react-hook-form";
import uuid from 'react-uuid'

const Book = ({book, save}) => {
    const [tags, setTags] = useState([]);
    const {register, handleSubmit} = useForm({
        nativeValidation: true
    });
    const bookContext = useContext(BookContext);

    useEffect(() => {
        if (book !== undefined) {
            setTags(book.tags);
        }
    }, []);

    const onSubmit = (data, e) => {

        let uuidLocal;
        let existUUID = book !== undefined ? book.uuid !== undefined : true;

        while (existUUID) {
            uuidLocal = uuid();
            let data = bookContext.Books.find(p => p.uuid === uuidLocal);
            existUUID = data !== undefined;
        }
        data.uuid = book !== undefined ? book.uuid : uuidLocal;

        data.tags = tags;

        data.createdDate = new Date();

        fetch('https://loremflickr.com/g/320/240/book').then(r => {
            console.log(r);
            data.imageURL = r.url;
            bookContext.addBook(data);
            e.target.reset();

        });
        if (book !== undefined)
            save();
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="tile is-ancestor">

                <div className="tile is-parent">
                    <div className="tile is-child box">

                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input is-light" type="text" placeholder="Please enter  Title "
                                       defaultValue={book !== undefined ? book.title : ""}
                                       ref={register({required: "Please enter  Title"})}
                                       name="title"/>
                                <p className="help is-danger">Please enter Title</p>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea is-light" placeholder="Please enter  Book Description..."
                                          defaultValue={book !== undefined ? book.description : ""}
                                          ref={register({required: "Please enter  Book Description"})}
                                          name="description"/>

                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Image URL </label>
                            <div className="control">
                                <input className="input is-light" placeholder="Please enter a URL..."
                                       defaultValue={book !== undefined ? book.imageURL : ""}
                                       ref={register()}
                                       name="url"/>

                            </div>
                        </div>
                        <div className="container">
                            <label className="label">Book Tags</label>
                            <ReactTagInput
                                className="input is-light"
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
                                <button className="button is-link is-light" onClick={() => save()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </form>

    );
};

export default Book;

