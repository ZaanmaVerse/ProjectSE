const quotes = [
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don't take.",
    "The journey of a thousand miles begins with one step.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us."
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('generate-button');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});