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
             lists: []
         }*/
    ],
    loading: false,
    error: null
};
const addBook = (state, book) => {
   // console.log("asasd");
    if (book === []) return {
        ...state
    };
    const newBooks = [...state.books, book];
   //localStorage.setItem('books', JSON.stringify(newBooks));
    return {
        ...state,
        books: newBooks
    }
};
const removeBook = (state,id) => {
    return state.books.filter(p=>p.uuid!==id);
};


export const bookReducer = (state, action) => {

    switch (action.type) {
        case ADD_BOOK: {
            return addBook(state, action.Book);
        }
        case REMOVE_BOOK: {
            return removeBook(state,action.uuid);
        }

        default:
            return state;
    }
};
