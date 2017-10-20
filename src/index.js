import App from './app';
import dotenv from 'dotenv';

// Load env var
dotenv.load();

// Set port
const { PORT = 8080 } = process.env;

// express listen to port
new App(PORT);
