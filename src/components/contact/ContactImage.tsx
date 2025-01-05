import React from "react";
import { motion } from "framer-motion";

export const ContactImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative h-full w-full"
    >
      <img
        src="/lovable-uploads/9ee2b4c9-5525-45e4-b911-bc6ed2802e94.png"
        alt="Hemp House growing facility"
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
    </motion.div>
  );
};