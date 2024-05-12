const express = require('express');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./src/middleware/authMiddleware');
const authRoutes = require('./src/routes/authRoutes');
const profileController = require('./src/controllers/profileController');
const formController = require('./src/controllers/formController');
const contactsController = require('./src/controllers/contactsController');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/login', authRoutes);

// Proteger endpoints
app.use('/profile', authMiddleware.verifyToken, profileController);
app.use('/form', authMiddleware.verifyToken, formController);
app.use('/contacts', authMiddleware.verifyToken, contactsController);

const PORT = process.env.PORT || 3000;

// Manejador de ruta para la raíz "/"
app.get("/", (req, res) => res.send("servidor en linea"));

// Manejador de ruta para cualquier otra ruta
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
