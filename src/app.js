const express = require('express');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');
const profileController = require('./controllers/profileController');
const formController = require('./controllers/formController');
const contactsController = require('./controllers/contactsController');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

// Proteger endpoints
app.use('/api/profile', authMiddleware.verifyToken, profileController);
app.use('/api/form', authMiddleware.verifyToken, formController);
app.use('/api/contacts', authMiddleware.verifyToken, contactsController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});