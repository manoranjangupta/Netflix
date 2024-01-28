import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      {posterPath &&
     <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
      }
    </div>
  )
}

export default MovieCard
