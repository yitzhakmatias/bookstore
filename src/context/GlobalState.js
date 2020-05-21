import React, {useEffect, useReducer, useState} from 'react';
import BookContext from "./IBookContext";
import {bookReducer, ADD_BOOK, REMOVE_BOOK, initialState, GET_BOOKS} from "./reducers"

const GlobalState = props => {

    const [state, dispatch] = useReducer(bookReducer, initialState, () => {
        if (!localStorage.hasOwnProperty('books')) return initialState;
        const data = localStorage.getItem('books');
        if (data === "undefined") return initialState;
        return data ? {
            books: JSON.parse(data)
        } : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(state.books));
    }, [state.books]);

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

        dispatch({type: REMOVE_BOOK, uuid: uuid})
    };


    return (
        <BookContext.Provider value={{
            addBook: addBook,
            deleteBook: removeBook,

            Books: state.books ?? [],

        }}>{props.children}
        </BookContext.Provider>

    )


};

export default GlobalState;
