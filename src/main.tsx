import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (window.location.hostname === "komodo-consulting.lovable.app") {
  window.location.replace("https://komodo-consulting.pt");
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
