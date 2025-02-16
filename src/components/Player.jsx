import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import musicFile from "../assets/Others/Laufey - Valentine (Official Audio).mp3";
import playBtn from "../assets/Others/play.svg";
import pauseBtn from "../assets/Others/pause.svg";

export default function MusicPlayer() {
  const audioRef = useRef(new Audio(musicFile));

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(() => {
    const storedVolume = localStorage.getItem("volume");
    return storedVolume === null ? 0.2 : parseFloat(storedVolume);
  });

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;
    audio.currentTime = 0; // Start from beginning
    audio.muted = false; // Ensure unmuted

    return () => {
      audio.pause();
    };
  }, []); // Runs once on mount

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    localStorage.setItem("volume", volume);
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
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
      <h2>{isPlaying ? "Now Playing... 🎶" : "Click Play! 🐇"}</h2>
      <div className="scrolling-title">
        <p>
          Laufey - Valentine (Official Audio) ❤️ Love is a beautiful thing, and
          today is a reminder to appreciate the connections that bring warmth to
          our hearts. For those spending the day alone, remember that love isn’t
          just about romance—it’s in the friendships you cherish, the family who
          supports you, and most importantly, the kindness you show yourself.
          You are worthy of love, joy, and all the good things life has to
          offer. Take today as a reminder that your story is still unfolding,
          and love—whether from within or from others—will find you in its own
          time. No matter how you spend today, know that you are valued,
          appreciated, and never truly alone. 💖
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
