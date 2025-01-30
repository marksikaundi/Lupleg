import React, { useEffect, useState } from 'react'

useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.currentTime = time;
    }
    }, [time]);

function st() {
    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onPlay={videoRef} >Click</button>
    </div>
  )
}

export default st
