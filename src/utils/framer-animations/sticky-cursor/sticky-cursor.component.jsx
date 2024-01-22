import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

import { Container, StyledMotionDiv } from "./sticky-cursor.styles";

const StickyCursor = () => {
  const cursor = useRef();
  const [hasMoved, setHasMoved] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isBackgroundColorMatch, setIsBackgroundColorMatch] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.8 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
      setHasMoved(true);
    },
    [hasMoved]
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [hasMoved]);

  useEffect(() => {
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    let elements = [];

    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    elements = [...document.querySelectorAll("button, a, input, [data-cursor='pointer']")];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  useEffect(() => {
    const onMouseEnterBackgroundColor = (event) => {
      const targetElement = event.target;
      const backgroundColor = window.getComputedStyle(targetElement).backgroundColor;

      const isBackgroundColorMatch = backgroundColor === "rgb(21, 101, 216)";

      setIsBackgroundColorMatch(isBackgroundColorMatch);
    };

    const onMouseLeaveBackgroundColor = (event) => {
      const targetElement = event.target;
      const backgroundColor = window.getComputedStyle(targetElement).backgroundColor;

      // for blue button hover color
      const isBackgroundColorMatch = backgroundColor !== "rgb(21, 101, 192)";

      setIsBackgroundColorMatch(isBackgroundColorMatch);
    };

    const backgroundElements = [
      ...document.querySelectorAll("button, header, main, footer, section, [data-cursor='pointer']"),
    ];

    backgroundElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnterBackgroundColor, false);
      element.addEventListener("mouseleave", onMouseLeaveBackgroundColor, false);
    });

    return () => {
      backgroundElements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnterBackgroundColor, false);
        element.removeEventListener("mouseleave", onMouseLeaveBackgroundColor, false);
      });
    };
  }, []);

  return (
    <Container style={{ opacity: hasMoved ? 1 : 0, transition: "opacity 0.6s ease" }}>
      <div ref={cursor}>
        <StyledMotionDiv
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          $pointer={isPointer}
          $white={isBackgroundColorMatch}
        />
      </div>
    </Container>
  );
};

export default StickyCursor;
