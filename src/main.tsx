import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Styles
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/dropzone/styles.css";
import '@mantine/charts/styles.css';

// Provider
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

// Theme
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
