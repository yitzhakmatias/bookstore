import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MainNavigation from "../../shared/pages/MainNavigation";
import Footer from "../../layout/pages/footer";
import Books from "../../books/pages/books";
import users from "../../user/pages/user";
import book from "../../books/components/book";
import bookCollection from "../../bookCollections/pages/bookCollection";

const layout = () => {
    return (
        <div >
            <Router>
                <MainNavigation/>
                <Switch>
                    <Route path="/" exact component={Books}/>
                    <Route path="/books" exact component={Books}/>
                    <Route path="/book" exact component={book}/>
                    <Route path="/users" exact component={users}/>
                    <Route path="/lists" exact component={bookCollection}/>
                    <Redirect to="/"/>
                </Switch>

            </Router>
            <Footer/>
        </div>

    );
};

export default layout;
