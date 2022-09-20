import React, { useRef, useState } from 'react';
import Videostyles from './video.module.scss';
const UseRefPlayer = () => {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const handlePlay = () => {
    videoRef.current.play();
    setIsVisible((current) => !current);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setIsVisible((current) => !current);
  };

  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => setIsMuted((current) => !current);

  return (
    <>
      <video
        ref={videoRef}
        muted={isMuted}
        autoPlay
        loop
        poster="/watersider-place.jpg"
      >
        <source src="/waterside-place.mp4" />
      </video>
      <div
        className={`${
          isVisible ? `${Videostyles.pauseActive}` : `${Videostyles.playActive}`
        } ${Videostyles.videoControls}`}
      >
        <button onClick={handlePlay} className={Videostyles.playBtn}>
          Play
        </button>
        <button onClick={handlePause} className={Videostyles.pauseBtn}>
          Pause
        </button>
        <button
          onClick={handleToggleMute}
          className={`${
            isMuted
              ? `${Videostyles.muteActive}`
              : `${Videostyles.muteInactive}`
          }`}
        >
          Unmute
        </button>
      </div>
    </>
  );
};

export default UseRefPlayer;
