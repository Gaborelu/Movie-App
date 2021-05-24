//Gabor Catalin-Vasilica
import React from 'react'
import { img_300, unavailable } from '../../config/config'

import './SingleMovie.css'

const setVoteColor = (vote) => {
  if (vote >= 8) {
    return 'green'
  }

  if (vote <= 5) {
    return 'red'
  }
}

const SingleMovie = ({ movie }) => {
  return (
    <div className='media'>
      <span className={`badge ${setVoteColor(movie.vote_average)}`}>
        {movie.vote_average}
      </span>
      <img
        className='poster'
        src={
          movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable
        }
        alt={movie.title || movie.name}
      />
      <h3 className='title'>{movie.title || movie.name}</h3>
      {movie.vote_average >= 8 ? (
        <h4 className='title-recomandat'>Recomandat</h4>
      ) : movie.vote_average <= 5 ? (
        <h4 className='title-evitat'>De evitat</h4>
      ) : (
        ''
      )}
      <span className='subTitle'>
        {movie.media_type === 'tv' ? 'Serial' : 'Film'}
        <span className='subTitle'>
          {movie.release_date || movie.first_air_date}
        </span>
      </span>
    </div>
  )
}

export default SingleMovie
