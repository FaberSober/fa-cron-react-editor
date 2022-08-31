import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// 新的 createRoot API
const container = document.getElementById('root');

// @ts-ignore
const root = createRoot(container);
root.render(<App />);
