import React, { useState } from "react";
import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import Tracker from "./components/Tracker";
import ButtonLightDark from "./components/ButtonLightDark";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import ButtonStart from "./components/ButtonStart";
import Shell from "./Shell";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Shell />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
