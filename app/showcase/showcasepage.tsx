"use client";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import "./showcase.css";

const videos = [
  "/media/video-1.mp4",
  "/media/video-2.mp4",
  "/media/video-3.mp4",
  "/media/video-4.mp4",
];

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // pause + reset when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="video-section">
      <h2 className="video-heading">
        Customized Cloud Based Smart Card Solutions Made for Your Organization
      </h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button>

        <div className="video-wrapper">
          <video
            key={index}
            ref={videoRef}
            className="video-player"
            src={videos[index]}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />

          {!isPlaying && (
            <button className="play-btn" onClick={togglePlay}>
              ▶
            </button>
          )}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button>

        
        
      </div>
      <a>High Quality Solutions and Services for Every Need. Higher Commitment.</a>
    </section>
  );
}
