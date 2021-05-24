//Gabor Catalin-Vasilica
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleMovie from '../../components/SingleMovie/SingleMovie'

import './Trending.css'

const Trending = () => {
  const [content, setContent] = useState([])

  // fetch movies and series on tranding
  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      )

      setContent(data.results)
      console.log(data.results)
    }

    fetchTrending()
  }, [])

  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        {content &&
          content.map((movie) => <SingleMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Trending
