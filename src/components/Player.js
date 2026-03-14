
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBackward, faPlay, faPause, faForward } from "@fortawesome/free-solid-svg-icons";

import { useRef, useState, useEffect } from "react";

function Player({ songs, currentIndex, setCurrentIndex }) {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

 // Load new song when currentIndex changes
  useEffect(() => {
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

 // Update progress bar
  const updateProgress = () => {
    const percent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent || 0);
  };

  // Seek Function
  const seekSong = (e) => {
    const percent = e.target.value;
    audioRef.current.currentTime =
      (percent / 100) * audioRef.current.duration;
    setProgress(percent);
  };

  // Next song
 const nextSong = () => {
    setCurrentIndex((currentIndex + 1) % songs.length);
    setIsPlaying(true); // auto play next song
  };

  // Previous song
  const prevSong = () => {
    setCurrentIndex(
      (currentIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(true); // auto play next song
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

   return (
    <div className="player">

      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onEnded={nextSong}
      >
        <source src={songs[currentIndex].src} />
      </audio>

      

    <h4 className="song-title">{songs[currentIndex].title}</h4>

    <div className="controls">
      <button onClick={prevSong}>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={nextSong}>⏭</button>
    </div>

    <div className="seek-container">
      <input
        type="range"
        value={progress}
        onChange={seekSong}
        className="seek"
      />

  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    onChange={(e) => (audioRef.current.volume = e.target.value)}
    className="volume"
  />

  </div>
</div>

);
}

export default Player;


