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
        "You blinked and suddenly, you had a valentine! What’s your ideal activity?",
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
    if (selectedOption === "") return; // Prevent proceeding if no option is selected

    const currentQuestion = questions[step];
    const selectedIndex = currentQuestion.options.indexOf(selectedOption); // Find the index of the selected option
    const outcome = currentQuestion.outcomes[selectedIndex]; // Match outcome based on index

    setAnswers({
      ...answers,
      [currentQuestion.question]: outcome, // Assign the correct outcome
    });

    setSelectedOption(""); // Reset selection for the next question

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
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
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
        <motion.div
          className="card results-card"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Stickers appear after card */}
          <motion.img
            src={bunnies}
            alt="bunnies png"
            className="bunny-left"
            initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          />
          <motion.img
            src={flower}
            alt="flower png"
            className="flower-right"
            initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
          />

          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />

          {/* Name fades in */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            {name},
          </motion.p>

          <hr className="note-line" />

          {/* Date description fades in */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Based on your answers, here’s the perfect date:
          </motion.p>

          <hr className="note-line" />
          <br />
          <hr className="note-line" />

          {/* Answers fade in one by one */}
          {Object.entries(answers).map(([question, answer], index) => (
            <motion.span key={index} className="answer-text">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.2 + index * 0.4 }}
              >
                {answer}
              </motion.p>
              <hr className="note-line" />
            </motion.span>
          ))}

          <br />
          <hr className="note-line" />

          {/* Final message fades in last before button */}
          <motion.p
            className="final-message"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 2.2 + Object.keys(answers).length * 0.4,
            }}
          >
            Now go and make it happen! 🌟
          </motion.p>

          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />

          {/* Button appears last */}
          <motion.button
            className="button retry-button"
            onClick={() => setStep("landing")}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.4,
              delay: 2.6 + Object.keys(answers).length * 0.4,
            }}
          >
            Start Over
          </motion.button>
        </motion.div>
      )}
      <Player />
      <div className="links-container">
        <p>Made with ❤️ by Marc</p>
        <motion.a
          href="http://marcsapa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-link portfolio"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
        >
          Check out my Portfolio 👾
        </motion.a>

        <motion.a
          href="https://github.com/marcs12/date-gen"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-link github"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
        >
          Want to see how I built this? 🖥️
        </motion.a>
      </div>
    </div>
  );
}
