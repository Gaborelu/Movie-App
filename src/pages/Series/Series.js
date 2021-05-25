//Voicu Diana
import React, { useState } from 'react'
import axios from 'axios'
import SingleMovie from '../../components/SingleMovie/SingleMovie'

import './Series.css'

const Series = () => {
  const [content, setContent] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  //fetch series by input search term
  const fetchSearchTerm = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchTerm}`
      )
      setContent(data.results)

      //clear the input
      setSearchTerm('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    fetchSearchTerm()
  }

  return (
    <>
      <span className='pageTitle'>Seriale</span>
      <form onSubmit={handleOnSubmit}>
        <div className='input-div'>
          <input
            className='search-input'
            type='text'
            placeholder='Cauta un serial...'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

      {searchTerm && !content ? (
        <h2>Nu au fost gasite rezultate</h2>
      ) : (
        <div className='trending results'>
          {content &&
            content.map((movie) => (
              <SingleMovie key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </>
  )
}

export default Series
