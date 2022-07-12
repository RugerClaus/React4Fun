import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import Header from './components/header';
import Navigation from "./components/Navigation";

const root = document.querySelector('#root');

let styles = {
    header: {
        position: 'fixed'
    },
}

ReactDOM.render(
<div>
    <Navigation />
    <Header style={styles.header} />
    <Counter />

</div>, 
root
)