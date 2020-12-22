var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// Escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Dani',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
})

// Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor', message);
})