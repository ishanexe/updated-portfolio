import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  const el = useRef(null); // Create a reference for the element
  const typed = useRef(null); // Create a reference for the Typed instance

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ['I am a Full-Stack Developer', 'I am a Competitive programmer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <h2
      className="fs-2 font-monospace mb-4"
      style={{ opacity: 1, transform: 'none', '--bs-text-opacity': '.5' }}
    >
      <span ref={el}></span>
    </h2>
  );
};

export default Typewriter;
