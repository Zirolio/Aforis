"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Настройка сервера
// import express = require('express');
var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
var host = '0.0.0.0';
var port = process.env.PORT || 5000;
app.use(express.static('dist'));
// -----------------
// Работа с сокетом клиента
// ------------------------
// Запуск сервера
if (process.env.CI) {
    server.listen(port, host, function () {
        console.log('\nServer started');
        console.log("Link: ".concat(host, ":").concat(port));
        console.log("Press Ctrl+C to stop\n");
    });
}
// --------------
"";
