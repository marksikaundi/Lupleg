"use client";
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress } from 'react-icons/fa';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    videoRef.current.volume = volume;
    setIsMuted(volume === 0);
  };

  const handleProgressChange = (e) => {
    const progress = e.target.value;
    setProgress(progress);
    videoRef.current.currentTime = (videoRef.current.duration * progress) / 100;
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current.requestFullscreen) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className={`relative ${isFullscreen ? 'w-screen h-screen' : 'w-full max-w-2xl'} mx-auto`}>
      <video
        ref={videoRef}
        className="w-full h-full"
        src="your-video-source.mp4" // replace with your video source
        onTimeUpdate={() => setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)}
      ></video>

      <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-60 text-white flex items-center justify-between px-4 py-2">
        <button onClick={handlePlayPause} className="p-2">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="flex-1 mx-2"
        />

        <button onClick={() => setIsMuted(!isMuted)} className="p-2">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 mx-2"
        />

        <button onClick={handleFullscreenToggle} className="p-2">
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
