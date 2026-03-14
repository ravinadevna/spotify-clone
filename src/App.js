//import logo from './logo.svg';


import React, {useState} from "react";
import Player from "./components/Player";
import Songlist from "./components/Songlist";
import './App.css';



function App() {
  const songs = [
    { id: 1, title:"SOFTLY", artist: "Karan Aujla", src: require("./components/Songs/SOFTLY.mp3") },
    { id: 2, title:"WAVY", artist: "Karan Aujla", src: require("./components/Songs/WAVY.mp3") },
    { id: 3, title:"Whenever", artist: "Amrit Maan", src: require("./components/Songs/Whenever.mp3") },
  ];
  //const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return(
    <div className="app">
      <div className="sidebar">
        <div className="logo">
        <img src="/spotify.png" alt="spotify" />
        <h2>Spotify</h2>
      </div>

        <Songlist songs={songs} setCurrentIndex={setCurrentIndex} />
      </div>

      <Player
        songs={songs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
