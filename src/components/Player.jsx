import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import musicFile from "../assets/Others/Laufey - Valentine (Official Audio).mp3";

export default function MusicPlayer() {
  const audioRef = useRef(new Audio(musicFile));
  const [isPlaying, setIsPlaying] = useState(() => {
    const storedPlay = localStorage.getItem("isPlaying");
    return storedPlay === null ? true : JSON.parse(storedPlay);
  });
  const [volume, setVolume] = useState(() => {
    const storedVolume = localStorage.getItem("volume");
    return storedVolume === null ? 0.2 : parseFloat(storedVolume);
  });

  useEffect(() => {
    audioRef.current.volume = volume;
    // Auto-play the audio when the page loads and when the state is true
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, []); // This ensures the effect runs only once when the page loads

  useEffect(() => {
    audioRef.current.volume = volume;
    localStorage.setItem("volume", volume);
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
    localStorage.setItem("isPlaying", isPlaying);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  return (
    <motion.div
      className="music-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </motion.div>
  );
}
