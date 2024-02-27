import React from 'react';
import './App.css';
import Feed from './components/Feed';
import { MoviesProvider } from './Context/movies';
function App() {

  return (
    <MoviesProvider>
      <div className="App">
        <h1>Kendo UI Feed</h1>
        <Feed />
      </div>
    </MoviesProvider>
  );
}

export default App;
