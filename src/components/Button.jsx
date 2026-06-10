import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
      onClick={toggleTheme}
    >
      Current Theme: {theme} (Click to change)
    </button>
  );
}
export default Button;
