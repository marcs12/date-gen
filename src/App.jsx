import "./styles/styles.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import ParticlesBackground from "./Particle";

// Component
import Player from "./components/Player";

// Assets
import gifBackground from "../src/assets/Background/twinkle2.gif";
import gifClose from "../src/assets/Others/iconmonstr-x-mark-1.svg";

// Stickers
import bunnies from "../src/assets/Stickers/bunnies.png";
import flower from "../src/assets/Stickers/flower.png";
import heart from "../src/assets/Stickers/hearts.png";
import sparkles from "../src/assets/Stickers/sparkles.png";

export default function ValentinesApp() {
  const [step, setStep] = useState("landing");
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const questions = [
    {
      question:
        "You've rejected affection for years, but now you're ready for a date! What's the vibe?",
      options: [
        "💻 A cozy video call with snacks and drinks",
        "🎮 A fun co-op gaming session",
        "🎨 A virtual museum or art tour",
        "🍜 Ordering the same takeout and eating together over Discord",
      ],
    },
    {
      question:
        "You’re caught in a romance—what’s the perfect soundtrack for the date?",
      options: [
        "🎶 A shared lo-fi playlist for chill vibes",
        "🎸 A live-streamed indie concert",
        "🎻 A dramatic film score in the background",
        "🎤 A virtual karaoke showdown",
      ],
    },
    {
      question:
        "You blinked and suddenly, you had a valentine! What’s the ideal first activity?",
      options: [
        "🖌️ Drawing portraits of each other over a call",
        "🌌 Watching a space livestream and talking about the universe",
        "🎮 Competing in an online party game",
        "📖 Reading poetry or a short story together",
      ],
    },
    {
      question:
        "You still feel a shock through every bone—what surprise will make the night unforgettable?",
      options: [
        "💌 Sending a heartfelt email or voice note",
        "🍫 Ordering a surprise dessert to their doorstep",
        "🎤 Sending them a personalized playlist",
        "🎁 Playing a ‘mystery question’ game to learn more about each other",
      ],
    },
    {
      question: "What’s the perfect way to end the night?",
      options: [
        "🌊 Sending a goodnight voice message",
        "🌠 Watching a virtual planetarium show together",
        "🍵 Talking about your favorite childhood memories before logging off",
        "🏡 Making plans for the next online date",
      ],
    },
  ];

  const handleAnswer = () => {
    setAnswers({ ...answers, [questions[step].question]: selectedOption });
    setSelectedOption("");
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep("results");
    }
  };

  return (
    <div className="app-container">
      <ParticlesBackground />
      <div
        className="heading-bar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Date Generator
        </motion.h1>
        <ul className="window-controls">
          <li className="min-box">
            <div className="minimize">
              <span className="min-icon"></span>
            </div>
          </li>
          <li className="max-box">
            <div className="maximize">
              <span className="max-icon"></span>
            </div>
          </li>
          <li className="close-box">
            <div className="close">
              <img src={gifClose} alt="close" />
            </div>
          </li>
        </ul>
      </div>
      {step === "landing" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card landing-card"
        >
          <motion.img
            src={sparkles}
            alt="sparkling png"
            className="sparkle-top-left"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [1, 0, 1, 0, 1, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src={sparkles}
            className="sparkle-bottom-right"
            alt="sparkling png"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [1, 0, 1, 0, 1, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
          <h2>What's your name?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-field"
          />
          <br />
          <motion.button
            className="button"
            onClick={() => name && setStep(0)}
            disabled={!name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter
          </motion.button>
        </motion.div>
      ) : step !== "results" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {questions[step].question}
          </motion.h2>
          <div className="options-grid">
            {questions[step].options.map((option) => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <motion.button
            className="button"
            onClick={handleAnswer}
            disabled={!selectedOption}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card results-card"
        >
          <motion.img
            src={bunnies}
            alt="bunnies png"
            className="bunny-left"
            initial={{
              opacity: 0,
              scale: 0.5,
              clipPath: "inset(50% 50% 50% 50%)",
            }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.05, 1],
              clipPath: ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              clipPath: { duration: 1, ease: "easeInOut" },
              scale: { duration: 0.6, ease: "easeOut" },
            }}
          />
          <motion.img
            src={flower}
            alt="flower png"
            className="flower-right"
            initial={{
              opacity: 0,
              scale: 0.5,
              clipPath: "inset(50% 50% 50% 50%)",
            }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.05, 1],
              clipPath: ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              clipPath: { duration: 1, ease: "easeInOut" },
              scale: { duration: 0.6, ease: "easeOut" },
            }}
          />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <p>{name},</p>
          <hr className="note-line" />
          <p>Based on your answers,</p>
          <hr className="note-line" />
          <p>here’s the perfect date:</p>
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          {Object.entries(answers).map(([question, answer], index) => (
            <span key={index} className="answer-text">
              <p>{answer}</p>
              <hr className="note-line" />
            </span>
          ))}
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <p className="final-message">Now go and make it happen! 🌟</p>
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <motion.button
            className="button retry-button"
            onClick={() => setStep("landing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Over
          </motion.button>
          <motion.div
            id="pink-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
      <Player />
    </div>
  );
}
