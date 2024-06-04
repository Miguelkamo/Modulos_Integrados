const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('./database');

// Configuraciones
app.set('port', process.env.PORT || 6000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Rutas
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/campanas-marketing', require('./routes/campanaRoutes'));
app.use('/api/servicios', require('./routes/servicioRoutes'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto', app.get('port'));
});
