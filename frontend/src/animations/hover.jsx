import React from "react";
import { motion } from "framer-motion";
const Hover = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.010 }}>
      {children}
    </motion.div>
  );
};

export default Hover;
