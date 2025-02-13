import { motion } from "framer-motion";

import bunny from "../assets/Stickers/bunnies.png"; // Replace with actual path
import flower from "../assets/Stickers/flower.png";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      {/* Bouncing Bunny */}
      <motion.img
        src={bunny}
        alt="Bouncing Bunny"
        className="bunny-icon"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Flowers */}
      <motion.img
        src={flower}
        alt="Rotating Flower Left"
        className="flower-icon left"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
      <motion.img
        src={flower}
        alt="Rotating Flower Right"
        className="flower-icon right"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -360] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />

      {/* Scribbly Loading Text */}
      <motion.p
        className="loading-text"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingAnimation;
