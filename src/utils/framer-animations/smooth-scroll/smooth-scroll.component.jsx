import { useState, useRef, useEffect } from "react";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollBody } from "./smooth-scroll.styles";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  // The height of the content in pixels
  const [contentHeight, setContentHeight] = useState(0);

  // The value to transform the content to
  const y = useTransform(smoothProgress, (v) => v * -(contentHeight - window.innerHeight));

  // A reference to hold the value of the content
  const contentRef = useRef(null);

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    // Call the resize handler once, initially
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <ScrollBody style={{ y }} ref={contentRef}>
        {children}
      </ScrollBody>
    </>
  );
};

export default SmoothScroll;
