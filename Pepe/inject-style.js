// inject-style.js

const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'http://localhost:5173/km-theme.css'; // served by Vite
document.head.appendChild(style);
