const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
            // if (message.usuario) {
            //     callback({
            //         resp: 'TODO SALIO BIEN'
            //     })
            // } else {
            //     callback({
            //         resp: 'TODO SALIO MAL !!!!!'
            //     })
            // }

    })
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta app'
    })
})