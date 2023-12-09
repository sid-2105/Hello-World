import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex === text.length) {
          clearInterval(intervalId);
          return prevText;
        }
        return prevText + text[currentIndex++];
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
