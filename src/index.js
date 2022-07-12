import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import Header from './components/header';
import FloatingHeader from "./components/FloatingHeader";

const root = document.querySelector('#root');

ReactDOM.render(
<div>
<Header />
<Counter />
<FloatingHeader />
</div>, 
root
)