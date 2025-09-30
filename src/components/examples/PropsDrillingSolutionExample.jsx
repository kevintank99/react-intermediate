import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

// Context example
const ThemeContext = createContext("light");

// Minimal styled button
const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.themeMode === "light" ? "#3b82f6" : "#1f2937")};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.themeMode === "light" ? "#2563eb" : "#111827")};
  }
`;

const Leaf = () => {
  const theme = useContext(ThemeContext);
  return <div>Leaf theme: {theme}</div>;
};

const Branch = () => <Leaf />;
const Trunk = () => <Branch />;

const PropsDrillingSolutionExample = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ fontSize: "0.875rem", color: "#374151", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.625rem", textTransform: "uppercase", color: "#6b7280" }}>Theme</span>
        <ToggleButton themeMode={theme} onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
          Toggle: {theme}
        </ToggleButton>
      </div>
      <ThemeContext.Provider value={theme}>
        <Trunk />
      </ThemeContext.Provider>
    </div>
  );
};

export default PropsDrillingSolutionExample;
