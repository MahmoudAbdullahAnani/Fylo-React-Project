import React from "react";
import { motion } from "framer-motion";
function Futshar(props) {
  return (
    <motion.div
      className={props.defoultClass}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: -300, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ damping: 100, duration: 0.7 }}
    >
      <img src={props.image} alt="..." />
      <h1 className="whitespace-nowrap py-2">{props.header}</h1>
      <p className="text-lg-center text-left ">{props.text}</p>
    </motion.div>
  );
}
export default Futshar;
