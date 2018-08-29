import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Netflix from './Netflix';

class App extends Component {
  render() {
    return (
      <div className="App" align="center">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>

        <Netflix movieInfo= {
            [{movieName:"Your Name.",yearReleased:2016, genre: " Animation, Drama, Fantasy", src:"https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg", wiki:"https://www.imdb.com/title/tt5311514/", textField:""},
                {movieName:"Annihilation",yearReleased:2018, genre: "Adventure, Drama, Horror ", src:"https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_UX182_CR0,0,182,268_AL_.jpg", wiki:"https://www.imdb.com/title/tt2798920/", textField:""},
                    {movieName:"Back to the Future",yearReleased:19850, genre: "Adventure, Comedy, Sci-Fi", src:"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", wiki:"https://www.imdb.com/title/tt0088763/", textField:""}
            ]}/>

      </div>
    );
  }
}

export default App;
