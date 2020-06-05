export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_LIST = "ADD_BOOK_LIST";
export const ADD_CHECKED_BOOK_LIST = "ADD_CHECKED_BOOK_LIST";
export const REMOVE_BOOK_LIST = "REMOVE_BOOK_LIST";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const initialState = {
    books: [
        /* {
             uuid: "",
             title: "",
             description: "",
             tags: [],
             lists: [],
             imageURL:"",
             createdDate:new Date
         }*/
    ],
    pageNumbers: [],
    loading: false,
    error: null,
    checkedList: [],
    bookList: [
        // {id : "", collectionName:"", uuid:[]}
    ],

};
const addBook = (state, book) => {

    if (book === []) return {
        ...state
    };
    let storedBook = state.books.find(p => p.uuid === book.uuid);

    if (storedBook !== undefined && state.books !== undefined) {
        console.log("update ");
        let newBooks = state.books.map(p => {
            if (p.uuid === book.uuid) {

                return {
                    ...p,
                    description: book.description,
                    title: book.title,
                    tags: book.tags,
                    imageURL: book.imageURL
                };
            }
            return p;
        });
        return {
            ...state,
            books: newBooks
        }
    }

    const newBooks = [...state.books, book];

    return {
        ...state,
        books: newBooks
    }
};
const removeBook = (state, id) => {
    let books = state.books.filter(p => p.uuid !== id);
    return {
        ...state,
        books: books
    }
};

const addBookList = (state, bookList) => {

    if (bookList === []) return {
        ...state
    };
    let storedListBook = state.bookList.find(p => p.id === bookList.id);

    if (storedListBook !== undefined && storedListBook.uuids !== undefined) {

        let newBooks = state.bookList.map(p => {
            if (p.id === bookList.id) {
                let x = [bookList.uuids];
                return {
                    ...p,
                    name: bookList.name,
                    uuids: p.uuids.push(bookList.uuids)
                };
            }
        });
        return {
            ...state,
            bookList: newBooks
        }
    }

    const newBookList = [...state.bookList, bookList];

    return {
        ...state,
        bookList: newBookList
    }
};
const removeBookList = (state, id) => {
    let lists = state.bookList.filter(p => p.id !== id);
    return {
        ...state,
        bookList: lists
    }
};
const addCheckedBookList = (state, bookList) => {

    console.log(bookList);
    /*    const newBookList = [...state.checkedList, bookList];
        return {
            ...state,
            checkedList: newBookList
        }*/

};
export const bookReducer = (state, action) => {

    switch (action.type) {
        case ADD_BOOK: {
            return addBook(state, action.Book);
        }
        case REMOVE_BOOK: {
            return removeBook(state, action.uuid);
        }
        case ADD_BOOK_LIST: {
            return addBookList(state, action.bookList);
        }
        case REMOVE_BOOK_LIST: {
            return removeBookList(state, action.id);
        }
        case ADD_CHECKED_BOOK_LIST: {
            return addCheckedBookList(state, action.bookList);
        }
        default:
            return state;
    }
};
