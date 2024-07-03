"use client";
import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts,
  typingSpeed = 50,
  clearingSpeed = 50,
  pauseTime = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingTimer, setTypingTimer] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        // Deleting logic
        setDisplayedText((prev) => prev.slice(0, -1));
        setTypingTimer(clearingSpeed);
        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setTypingTimer(pauseTime);
        }
      } else {
        // Typing logic
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        setTypingTimer(typingSpeed);
        if (displayedText === currentText) {
          setIsDeleting(true);
          setTypingTimer(pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingTimer);
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingTimer,
    typingSpeed,
    clearingSpeed,
    pauseTime,
  ]);

  return (
    <div className="text-7xl md::text-8xl font-mono">
      <p>1-ON-1</p>
      <div className="text-green-600">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </div>
      <p>Mentorship</p>
    </div>
  );
};

export default TypingEffect;
