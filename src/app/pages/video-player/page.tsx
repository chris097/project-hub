'use client';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const handleError = (err: any) => {
    console.error('Error loading video:', err);
    setError('Error loading video. Please try again later.');
  };

  const handleProgress = (progressData: { played: number; playedSeconds: number }) => {
    setProgress(progressData.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleNext = () => {
    // Implement your logic for playing the next video
    // For example:
    // playerRef.current?.seekTo(0); // Seek to the beginning of the next video
    // setPlaying(true); // Start playing the next video
  };

  return (
    <div className=''>
      {error && <div>Error: {error}</div>}
      <ReactPlayer
        ref={playerRef}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        playing={playing}
        controls={false}
        width="100%"
        height="auto"
        onError={handleError}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className='absolute'>
        <button onClick={togglePlaying}>{playing ? 'Pause' : 'Play'}</button>
        <div>
          <input value={Math.round(progress * 100)} type='range' />
          Progress: {Math.round(progress * 100)}% ({formatTime(progress * duration)})
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default VideoPlayer;