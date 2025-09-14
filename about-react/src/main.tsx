import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./assets/App";
import "./App.css";

const rootElement: HTMLElement = document.querySelector('#root')!;

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>  
);