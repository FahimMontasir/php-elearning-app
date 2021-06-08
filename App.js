import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/theme/paperTheme";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={paperTheme}>
        <WelcomeScreen />
      </PaperProvider>
    </ThemeProvider>
  );
}
