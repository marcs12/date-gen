import "./styles/styles.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import ParticlesBackground from "./Particle";

// Component
import Player from "./components/Player";

// Assets
import gifClose from "../src/assets/Others/iconmonstr-x-mark-1.svg";

// Stickers
import bunnies from "../src/assets/Stickers/bunnies.png";
import flower from "../src/assets/Stickers/flower.png";
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
        "💖 Something low-key",
        "🌟 A little adventure",
        "🍷 Classy and elegant",
        "🎲 Spontaneous fun",
      ],
      outcomes: [
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
        "🎶 Chill and relaxed",
        "🎸 Indie vibes",
        "🎻 Dramatic and cinematic",
        "🎤 Fun and interactive",
      ],
      outcomes: [
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
        "🎨 Creative and artsy",
        "🌌 Something deep",
        "🎮 Playful competition",
        "📖 Meaningful and thoughtful",
      ],
      outcomes: [
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
        "💌 A heartfelt gesture",
        "🍫 A delicious treat",
        "🎤 A musical touch",
        "🎁 A fun game",
      ],
      outcomes: [
        "💌 Sending a heartfelt email or voice note",
        "🍫 Ordering a surprise dessert to their doorstep",
        "🎤 Sending them a personalized playlist",
        "🎁 Playing a ‘mystery question’ game to learn more about each other",
      ],
    },
    {
      question: "What’s the perfect way to end the night?",
      options: [
        "🌊 Sweet and simple",
        "🌠 Something magical",
        "🍵 Deep and nostalgic",
        "🏡 Planning ahead",
      ],
      outcomes: [
        "🌊 Sending a goodnight voice message",
        "🌠 Watching a virtual planetarium show together",
        "🍵 Talking about your favorite childhood memories before logging off",
        "🏡 Making plans for the next online date",
      ],
    },
  ];

  const handleAnswer = () => {
    const outcomeIndex = Math.floor(
      Math.random() * questions[step].outcomes.length
    );
    setAnswers({
      ...answers,
      [questions[step].question]: questions[step].outcomes[outcomeIndex],
    });
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
      <div className="heading-bar">
        <motion.h1>Date Generator</motion.h1>
        <ul className="window-controls">
          <li className="close-box">
            <div className="close">
              <img src={gifClose} alt="close" />
            </div>
          </li>
        </ul>
      </div>
      {step === "landing" ? (
        <motion.div className="card landing-card">
          <motion.img
            src={sparkles}
            alt="sparkling png"
            className="sparkle-top-left"
          />
          <h2>What's your name?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-field"
          />
          <motion.button
            className="button"
            onClick={() => name && setStep(0)}
            disabled={!name}
          >
            Enter
          </motion.button>
        </motion.div>
      ) : step !== "results" ? (
        <motion.div className="card">
          <motion.h2>{questions[step].question}</motion.h2>
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
          >
            Submit
          </motion.button>
        </motion.div>
      ) : (
        <motion.div className="card results-card">
          <motion.img src={bunnies} alt="bunnies png" className="bunny-left" />
          <motion.img src={flower} alt="flower png" className="flower-right" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <p>{name},</p>
          <hr className="note-line" />
          <p>Based on your answers, here’s the perfect date:</p>
          <hr className="note-line" />
          {Object.entries(answers).map(([question, answer], index) => (
            <span key={index} className="answer-text">
              <p>{answer}</p>
              <hr className="note-line" />
            </span>
          ))}
          <p className="final-message">Now go and make it happen! 🌟</p>{" "}
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <motion.button
            className="button retry-button"
            onClick={() => setStep("landing")}
          >
            Start Over
          </motion.button>
        </motion.div>
      )}
      <Player />
    </div>
  );
}
