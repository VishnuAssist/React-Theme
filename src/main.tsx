import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "./contexts/ThemeContext" // Import your custom ThemeProvider
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App.tsx"
import { store } from "./store/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider> {/* Use your custom ThemeProvider */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)