// Настройка сервера
// import express = require('express');
import * as express from 'express';
import * as http from 'http';

const app = express();
const server = http.createServer(app);
const host = '0.0.0.0' as unknown as number;
const port = process.env.PORT || 5000;
app.use(express.static('dist'));
// -----------------

// Работа с сокетом клиента
// ------------------------


// Запуск сервера
if (process.env.CI) {
    server.listen(port, host, () => {
        console.log('\nServer started');
        console.log(`Link: ${host}:${port}`);
        console.log(`Press Ctrl+C to stop\n`);
    });
}
// --------------
``