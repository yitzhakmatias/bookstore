import React, {useContext, useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import BookList from "./booksList";
import BookContext from "../../context/IBookContext";
import uuid from 'react-uuid'

const NewBookCollection = ({collectionList}) => {

    const [checkedBookList, setCheckedBook] = useState([]);
    const {register, handleSubmit} = useForm({
        nativeValidation: true
    });
    const bookContext = useContext(BookContext);

    React.useEffect(()=>{
        console.log(collectionList.name);
        console.log("props.collectionList.name");
    },[]);
    const onCheckList = (e) => {

        let bookId = e.target.id;
        if (e.target.checked) {
            let checkedBooks = [...checkedBookList, bookId];
            setCheckedBook(checkedBooks);

        } else {
            let checkedBooks = checkedBookList.filter(p => p !== bookId);
            setCheckedBook(checkedBooks);

        }

    };
    const onSubmit = (data, e) => {


        const bookCollection = {
            id:uuid(),
            name: data.listName,
            uuids: checkedBookList
        };
        bookContext.addBookList(bookCollection);
        e.target.reset();
    };
    return (
        <div className="tile is-child box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Collection's Name : </label>
                    <div className="control">
                        <input className="input is-primary"
                               type="text" placeholder="Name"
                               defaultValue={collectionList !== undefined ? collectionList.name : ""}
                               name="listName"
                               ref={register()}/>
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="field">

                    <BookList  handelOnCheck={onCheckList}  />
                </div>
                <div className="field is-grouped ">
                    <p className="control">
                        <button className="button is-primary">Submit</button>
                    </p>
                    <p className="control">
                        <button className="button is-danger is-outlined">Remove</button>
                    </p>
                </div>
            </form>

        </div>


    );
};

export default NewBookCollection;
