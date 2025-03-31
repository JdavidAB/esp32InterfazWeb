const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    ws.on('message', (message) => {
        console.log('Mensaje recibido:', message);
        ws.send("Mensaje recibido: " + message);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log("Servidor WebSocket corriendo...");
