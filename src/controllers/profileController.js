// Controlador para el endpoint de perfil
function profile(req, res) {
    // Datos ficticios de perfil
    const profileData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        birthDate: '1990-01-01'
    };
    res.status(200).json(profileData);
}

module.exports = profile;
