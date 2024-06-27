import React, {useState,useEffect} from 'react'
import Gif from './Gif'
import getGifs from '../services/GetGifs'
export default function ListOfGifs({params}){
  const {keyword} = params;
    const [gifs, setGifs] = useState([])

    useEffect(function (){
      getGifs({keyword})
      .then(gifs  => setGifs(gifs))
    }, [keyword]) 


      return <div>
        {
        gifs.map(({id,title,url}) =>
        <Gif 
           key={id}
           id={id} 
           title={title} 
          url = {url} 
        />
     )
}
</div>
}