import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter";
export default function App(){


  return (
    <div className="App">
      <section className="App-content">
       <h1>App</h1>
       <a href='/Gif/MJ'>Gif de Michael Jackson</a>
       <a href='/Gif/Spiderman'>Gif de Spiderman</a>
       <a href='/Gif/GOT'>Gif de Game Of Thrones</a>
       
      <Route component={ListOfGifs} 
      path="/gif/:keyword"  />
      </section>
      </div>
  )
}
