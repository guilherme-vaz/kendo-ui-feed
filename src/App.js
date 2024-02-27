import React from 'react';
import './App.css';
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "./products.json";
import Feed from './components/Feed';

function App() {

  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Feed />
    </div>
  );
}

export default App;
