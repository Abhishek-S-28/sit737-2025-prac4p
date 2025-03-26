const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
});

// Middleware to parse query parameters
app.use(express.json());

// Calculator functions
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default: return 'Invalid operation';
    }
}

// Define API endpoints
app.get('/:operation', (req, res) => {
    const { operation } = req.params;
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input parameters');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }

    const result = calculate(operation, num1, num2);
    logger.info(`Operation: ${operation}, Numbers: ${num1}, ${num2}, Result: ${result}`);
    res.json({ operation, num1, num2, result });
});

// Start server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
