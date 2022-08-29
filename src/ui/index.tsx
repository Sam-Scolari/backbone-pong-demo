import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//@ts-ignore
import styles from "./index.css";

// install styles to the document
if (typeof window === "object") {
  const css = document.createElement("style");
  css.setAttribute("id", "app-style");
  css.innerHTML = styles;
  document.body.appendChild(css);
}

export default async () => {
  /**
   * Backbone Bootloader creates #UI div, so you can do something like
   * ReactDOM.createRoot(document.getElementById('UI')).render(UI)
   *
   * This function will be automatically executed when app is loaded in Bootloader.
   */
  const root = ReactDOM.createRoot(document.getElementById("UI"));
  root.render(<App />);
};
