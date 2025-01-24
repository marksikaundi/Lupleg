"use client";

import { Button } from "@/components/ui/button";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CardHeader from "@/components/dl/CardHeader";

export default function DeepLearningSummary() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-teal-800">
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full z-0"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-teal-800 opacity-50 z-10"></div>
        <main className="relative z-20 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-[#F3A833] text-xs font-semibold px-2 py-1 rounded mb-4">
              DEEP LEARNING
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto">
              30DaysChallenge to deep learning with all key concepts.
            </h1>
            <Link href="/deep-learning/">
              <Button className="bg-[#2D1537] hover:bg-[#2D1537] text-white font-bold py-2 px-4 mt-6 rounded">
                Learn more
              </Button>
            </Link>
          </div>
        </main>
      </div>

      <div className="my-10">
        <CardHeader/>
      </div>
    </div>
  );
}
