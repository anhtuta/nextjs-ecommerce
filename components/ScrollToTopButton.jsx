import React from "react";
import { useScrollToTop } from "@hooks/useScrollToTop";
import Button from "./Button";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton = ({ text = "↑ Top", title = "Go to top", className = "", scrollThreshold }) => {
  const { isVisible, scrollToTop } = useScrollToTop(scrollThreshold);

  if (!isVisible) {
    return null;
  }

  return (
    <Button text={text} onClick={scrollToTop} title={title} className={`${styles.scrollToTopButton} ${className}`} />
  );
};

export default ScrollToTopButton;
