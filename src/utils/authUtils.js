const jwt = require('jsonwebtoken');

// Función para generar un token JWT
function generateToken(payload) {
    return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
}

module.exports = { generateToken };
