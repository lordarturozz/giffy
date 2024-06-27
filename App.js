import React, {useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/GetGifs';
function App(){
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword: 'Morty'}).then(gifs  => setGifs(gifs))
  },[])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif.url} />)
        }
      </section>
      </div>
  )
}