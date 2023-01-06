import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../views/App';

const app = document.getElementById('root');
const root = createRoot(app);

root.render(<App />);
