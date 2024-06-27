import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter";
export default function App(){


  return (
    <div className="App">
      <section className="App-content">
       <h1>App</h1>
       <a href='/Gif/MJ'></a>
       
      <Route component={ListOfGifs} 
      path="/gif/:keyword"  />
      </section>
      </div>
  )
}
