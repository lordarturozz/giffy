const apiKey = 'rBM8M99200b9OF1ukOdPKaFVBwM6jvM2'
export default function getGifs({keyword = 'rick' }= {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
   .then(res => res.json())
   .then(response => {
    const  { data = []} = response
    if (Array.isArray(data)){
      const gifs = data.map(image => {
        const {title, id, images} = image
        const {url} = images.fixed_height_downsampled
      return {title,id,url}
    })
   
   return gifs
  }
})
  }