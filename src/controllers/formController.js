// Controlador para el endpoint de formulario
function form(req, res) {
    const { text } = req.body;
    res.status(200).json({ text });
}

module.exports = form;
