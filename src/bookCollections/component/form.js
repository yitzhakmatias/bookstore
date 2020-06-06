import React, {useContext, useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import BookList from "./booksList";
import BookContext from "../../context/IBookContext";
import uuid from 'react-uuid'

const NewBookCollection = ({id}) => {


    const [collectionList, setCollectionList] = useState([]);
    const [bookList, setBookList] = useState([]);

    const [action, setAction] = useState("");
    const {register, handleSubmit} = useForm({
        nativeValidation: true
    });
    const bookContext = useContext(BookContext);

    React.useEffect(() => {

        if (id.constructor !== Object) {
            let collection = bookContext.bookList.find(p => p.id === id);
            setCollectionList(collection.uuids);
            setBookList(collection);
        }

    }, [id]);
    const onCheckList = (evt) => {

        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        let bookId = evt.target.id;


        if (value) {

            if (collectionList === undefined || collectionList.length === 0) {

                setCollectionList([{id: bookId, checked: true}])
            } else {
                let collection = collectionList.find(p => p.id === bookId);
                if (collection === undefined) {
                    setCollectionList([...collectionList, {id: bookId, checked: true}])
                }
            }


        } else {

            if (collectionList !== undefined) {
                let collection = collectionList.filter(p => p.id !== bookId);
                if (collection !== undefined) {
                    setCollectionList([...collection])
                }
            }

        }

    };
    const onSubmit = (data, e) => {

        if (action === "add") {
            const bookCollection = {
                id: bookList.id !== undefined ? bookList.id : uuid(),
                name: data.listName,
                uuids: collectionList
            };

            bookContext.addBookList(bookCollection);
            e.target.reset();
        }
        if (action === "remove") {

            bookContext.removeBookList(bookList.id !== undefined ? bookList.id : 0);
        }
    };

    function removeItem() {
        setAction("remove");
    }

    function add() {
        setAction("add");
    }

    return (
        <div className="tile is-child box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Collection's Name : </label>
                    <div className="control">
                        <input className="input is-primary"
                               type="text" placeholder="Name"
                               defaultValue={bookList !== undefined ? bookList.name : ""}
                               name="listName"
                               ref={register()}/>
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="field">

                    <BookList handelOnCheck={onCheckList} collectionList={collectionList}/>
                </div>
                <div className="field is-grouped ">
                    <p className="control">
                        <button className="button is-primary" onClick={() => add()}>Save</button>
                    </p>
                    <p className="control">
                        <button className="button is-danger is-outlined"
                                onClick={() => removeItem()}>Remove
                        </button>
                    </p>
                </div>
            </form>

        </div>


    );
};

export default NewBookCollection;
