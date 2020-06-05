import React, {useEffect, useReducer, useState} from 'react';
import BookContext from "./IBookContext";
import {
    bookReducer,
    ADD_BOOK,
    REMOVE_BOOK,
    initialState,
    GET_BOOKS,
    ADD_BOOK_LIST,
    REMOVE_BOOK_LIST,
    ADD_CHECKED_BOOK_LIST
} from "./reducers"


const GlobalState = props => {


    const [state, dispatch] = useReducer(bookReducer, initialState, () => {
        if (!localStorage.hasOwnProperty('books')) return initialState;
        const data = localStorage.getItem('books');
        const booksList = localStorage.getItem('booksList');
        if (data === "undefined") return initialState;

        return data ? {
            books: JSON.parse(data),
            count: JSON.parse(data).length,
            bookList: booksList !== null ? JSON.parse(booksList) : []
        } : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(state.books));
        localStorage.setItem('booksList', JSON.stringify(state.bookList));
    }, [state]);

    const addBook = (_book) => {

        dispatch({
            type: ADD_BOOK, Book: {
                uuid: _book.uuid,
                title: _book.title,
                description: _book.description,
                tags: _book.tags,
                imageURL: _book.imageURL,
                createdDate: _book.createdDate,
                lists: _book.lists
            }
        })
    };
    const removeBook = (uuid) => {

        dispatch({type: REMOVE_BOOK_LIST, uuid: uuid})
    };
    const addBookList = (_BookList) => {
        console.log(_BookList);
        dispatch({
            type: ADD_BOOK_LIST, bookList: {
                id: _BookList.id,
                uuids: _BookList.uuids,
                name: _BookList.name,
            }
        })
    };
    const addCheckedBookList = (_BookList) => {

        dispatch({
            type: ADD_CHECKED_BOOK_LIST, bookList: _BookList
        })

    };
    const removeBookList = (id) => {

        dispatch({type: REMOVE_BOOK_LIST, id: id})
    };


    return (
        <BookContext.Provider value={{
            addBook: addBook,
            deleteBook: removeBook,
            Books: state.books ?? [],
            count: state.count,
            addBookList: addBookList,
            removeBookList: removeBookList,
            addCheckedBookList: addCheckedBookList,
            bookList: state.bookList ?? []
        }}>{props.children}
        </BookContext.Provider>

    )


};

export default GlobalState;
