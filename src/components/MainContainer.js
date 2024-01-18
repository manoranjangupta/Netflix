import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

export const MainContainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainmovie=movies[0];
    const {original_title,overview,id}=mainmovie;
   
  return (
    <div>
     
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  )
}

//export default MainContainer;
