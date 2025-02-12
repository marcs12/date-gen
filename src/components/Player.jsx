import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import musicFile from "../assets/Others/Laufey - Valentine (Official Audio).mp3";
import playBtn from "../assets/Others/play.svg";
import pauseBtn from "../assets/Others/pause.svg";

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
    audioRef.current.loop = true; // Set the audio to loop
    // Auto-play the audio when the page loads and when the state is true
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [isPlaying, volume]); // This ensures the effect runs only once when the page loads

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
      <div className="scrolling-title">
        <p>
          Laufey - Valentine ... this was taken from YT, please don&apos;t sue
          me. I love laufey so I made this somewhat Laufey themed. I hope you
          like it. Anyways, how are you? I hope you&apos;re doing well friend. I
          hope that you and your significant other have a great valentines day.
          You know what? Since you guys are doing so well, why not check their
          phone? I&apos;m sure they have nothing to hide right? Right? oh
          well... Just saying.. I hope you have a great day. Maybe.
        </p>
      </div>
      <button className="play-btn" onClick={togglePlay}>
        <img
          src={isPlaying ? pauseBtn : playBtn}
          alt={isPlaying ? "Pause" : "Play"}
        />
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
