import React from 'react';
import Layout from '../src/layout/pages/layout.js'
import GlobalState from "./context/GlobalState";

const App = () => {

    return (
        <GlobalState>
            <Layout/>
        </GlobalState>)

};

export default App;
