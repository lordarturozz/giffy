import React, {useState } from 'react';
import './App.css';
import ListOfGifts from './components/ListOfGifs';

export default function App(){
 const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
      <button onClick={() => setKeyword ('mapache')}
        >cambiar keyword</button>
       <ListOfGifts keyword={keyword} />
       
      </section>
      </div>
  )
}
