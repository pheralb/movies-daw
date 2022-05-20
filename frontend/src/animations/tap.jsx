import React from "react";
import { motion } from "framer-motion";

const Tap = ({ children }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.93 }}
    >
        {children}
    </motion.div>
  );
};

export default Tap;
