export const ADD_BOOK = "ADD_BOOK";
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
    Lists: [],

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


export const bookReducer = (state, action) => {

    switch (action.type) {
        case ADD_BOOK: {
            return addBook(state, action.Book);
        }
        case REMOVE_BOOK: {
            return removeBook(state, action.uuid);
        }

        default:
            return state;
    }
};
