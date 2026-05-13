import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div className="flex-1 h-screen w-full primary-bg primary-text">
      <App />
    </div>
  </BrowserRouter>,
);
