import React from "react";
import { createRoot } from "react-dom/client";
import EmiloLabsWebsite from "./EmiloLabs.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmiloLabsWebsite />
  </React.StrictMode>
);

