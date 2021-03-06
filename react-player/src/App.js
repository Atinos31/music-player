
import React, {useState} from 'react'
// import styles
import './styles/app.scss'
// adding components

// import util
import data from './util'
import Player from './components/Player';
import Song from './components/Song';

function App() {
  // state
  const [songs, setSongs] = useState (data());
  const [currentSong, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
    <Song  currentSong={currentSong} />
    <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
