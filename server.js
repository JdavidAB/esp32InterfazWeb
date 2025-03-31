const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }); // Usa un puerto abierto

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    ws.on('message', (message) => {
        console.log('Mensaje recibido:', message);
        
        // Puedes reenviar este mensaje a otros clientes conectados (ESP32)
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log("Servidor WebSocket corriendo en ws://tu-servidor:8080");
