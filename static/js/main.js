const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

// Toggle handler
themeToggle.addEventListener('change', (e) => {
    const selectedTheme = e.target.checked ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});