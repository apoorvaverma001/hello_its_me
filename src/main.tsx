import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // Tailwind CSS directives + global styles
import App from './App';

/**
 * Application Entry Point
 * 
 * This file is referenced by index.html's <script> tag.
 * It does three things:
 * 1. Imports the global CSS (Tailwind directives)
 * 2. Finds the #root div in index.html
 * 3. Renders the <App /> component into it
 * 
 * StrictMode is a development tool that:
 * - Highlights potential problems (double-renders to detect side effects)
 * - Warns about deprecated API usage
 * - Has zero impact in production builds
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
