import React, { useState } from "react";
import { motion } from "framer-motion";
import { disperse } from "./anim";
import { Introline } from "./text-disperse.styles";

const TextDipserse = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if (children.length) {
      children.forEach((el, i) => {
        chars.push(splitWord(el.props.children, i));
      });
    } else {
      chars.push(splitWord(element.props.children, 1));
    }
    return chars;
  };

  const splitWord = (word, indexOfWord) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      if (char === " ") {
        // If it's a space, add a non-breaking space (&nbsp;) element
        chars.push(
          <motion.span style={{ visibility: "hidden" }} key={char + i}>
            &nbsp;
          </motion.span>
        );
      } else {
        chars.push(
          <motion.span
            custom={indexOfWord * i}
            variants={disperse}
            animate={isAnimated ? "open" : "closed"}
            key={char + i}
          >
            {char}
          </motion.span>
        );
      }
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  return (
    <Introline
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave(false);
      }}
    >
      {getChars(children)}
    </Introline>
  );
};

export default TextDipserse;
