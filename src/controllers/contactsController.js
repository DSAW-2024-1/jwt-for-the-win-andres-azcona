// Controlador para el endpoint de contactos
function contacts(req, res) {
    // Datos ficticios de contactos
    const contactsList = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy', 'Mallory', 'Oscar', 'Peggy', 'Romeo', 'Sybil', 'Trent', 'Ursula', 'Victor', 'Walter', 'Xavier', 'Yvonne', 'Zoe', 'Mallory', 'Oscar', 'Peggy', 'Romeo', 'Sybil', 'Trent', 'Ursula', 'Victor', 'Walter', 'Xavier', 'Yvonne', 'Zoe'];
    res.status(200).json(contactsList);
}

module.exports = contacts;
