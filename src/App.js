// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
//console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated}/>
     <Row title = "Trending Now" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchComedyMovies}/>
     <Row title = "Trending Now" fetchUrl={requests.fetchActionMovies}/>
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title = "Trending Now" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
