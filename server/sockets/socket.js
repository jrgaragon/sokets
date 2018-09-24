const { io } = require('../server')
io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'mensaje desde servidor'
    });

    client.on('disconnect', (client) => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);



        // if (message.usuario) {
        //     callback({
        //         response: 'ok'
        //     });
        // } else {
        //     callback({
        //         response: 'error'
        //     });
        // }

    });
});