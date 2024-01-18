import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold '>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white px-12  text-black p-4  text-xl  rounded-lg hover:bg-opacity-70'>Play</button>
        <button className= 'bg-gray-500 px-12 mx-2  text-white p-4  text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
