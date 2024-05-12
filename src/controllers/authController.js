const { generateToken } = require('../utils/authUtils');

// Controlador para el endpoint de login
function login(req, res) {
    const { email, password } = req.body;
    // Verificar las credenciales del usuario
    if (email === 'admin@admin.com' && password === 'admin') {
        // Generar un token JWT
        const token = generateToken({ email });
        // Establecer la cookie de sesión y enviarla al cliente
        res.cookie('jwt', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
}

module.exports = { login };
