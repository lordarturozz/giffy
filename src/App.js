import {useEffect, useState } from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=rBM8M99200b9OF1ukOdPKaFVBwM6jvM2&q=Michael+Jackson&limit=10&offset=0&rating=g&lang=en&bundle=clips_grid_picker';
const url = 'https://api.giphy.com/v1/gifs/search?api_key=rBM8M99200b9OF1ukOdPKaFVBwM6jvM2&q=Michael+Jackson&limit=10&offset=0&rating=g&lang=en&bundle=clips_grid_picker';
function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function (){
   console.log('Actualizando los gifs');
   fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.fixed_width.url);
      setGifs(gifs);
    })
    }, [])
  return (
    <div className="App">
      <section className='App-content'>
        {
          gifs.map(singleGif  => <img src= {singleGif} />)
        }
       
      </section>
    </div>
  );
}

export default App;
