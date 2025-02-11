import "./styles/styles.scss";
import { useState } from "react";
import { motion } from "framer-motion";

// Assets
import gifBackground from "../src/assets/Background/twinkle2.gif";

import gifMinimize from "../src/assets/Others/iconmonstr-minimize-thin.svg";
import gifMaximize from "../src/assets/Others/iconmonstr-fullscreen-thin.svg";
import gifClose from "../src/assets/Others/iconmonstr-x-mark-1.svg";

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
        "🌿 A quiet picnic in the park",
        "🎭 A night at a jazz club",
        "🎡 A fun-filled carnival",
        "🍜 A cozy ramen shop date",
      ],
    },
    {
      question:
        "You’re caught in a romance—what’s the perfect soundtrack for the date?",
      options: [
        "🎶 Classic jazz and bossa nova",
        "🎸 Indie love songs",
        "🎻 A dramatic orchestral score",
        "🎧 Chill lo-fi beats",
      ],
    },
    {
      question:
        "You blinked and suddenly, you had a valentine! What’s the ideal first activity?",
      options: [
        "🖌️ Painting each other’s portraits",
        "🌌 Stargazing and deep talks",
        "🎮 A competitive arcade showdown",
        "📖 Reading poetry at a café",
      ],
    },
    {
      question:
        "You still feel a shock through every bone—what surprise will make the night unforgettable?",
      options: [
        "💌 A handwritten letter",
        "🍫 A custom-made dessert",
        "🎤 A serenade under the stars",
        "🎁 A mystery gift box",
      ],
    },
    {
      question: "What’s the perfect way to end the night?",
      options: [
        "🌊 A quiet walk by the water",
        "🌠 Making a wish on a shooting star",
        "🍵 Sipping tea and reflecting on the night",
        "🏡 A warm hug and a promise for another date",
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
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${gifBackground})`,
        backgroundSize: "25rem",
        backgroundPosition: "center",
      }}
    >
      <div className="heading-bar">
        <h1>Date Generator</h1>
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
          className="card"
        >
          <h2>What's your name?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-field"
          />
          <br />
          <button
            className="button"
            onClick={() => name && setStep(0)}
            disabled={!name}
          >
            Enter
          </button>
        </motion.div>
      ) : step !== "results" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card"
        >
          <h2>{questions[step].question}</h2>
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
          <button
            className="button"
            onClick={handleAnswer}
            disabled={!selectedOption}
          >
            Submit
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card results-card"
        >
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
          <p className="final-message">
            So... wanna go on this date with me? 😊
          </p>
          <hr className="note-line" />
          <br />
          <hr className="note-line" />
          <br />
          <hr className="note-line" />

          <button
            className="button retry-button"
            onClick={() => setStep("landing")}
          >
            Start Over
          </button>
        </motion.div>
      )}
    </div>
  );
}
