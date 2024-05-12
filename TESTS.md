# SET DE PRUEBAS TECNICAS JWT

### Pruebas para el endpoint de Login (/login):

1. **Inicio de Sesión Exitoso:**
   - **Enlace de la Solicitud:** `http://localhost:3000/login`
   - **Método:** POST
   - **Cuerpo de la Solicitud:**
     ```json
     {
       "email": "admin@admin.com",
       "password": "admin"
     }
     ```
   
2. **Inicio de Sesión Fallido:**
   - **Enlace de la Solicitud:** `http://localhost:3000/login`
   - **Método:** POST
   - **Cuerpo de la Solicitud:** Credenciales incorrectas o incompletas.

### Pruebas para el endpoint de Perfil (/profile):

3. **Acceso al Perfil Protegido:**
   - **Enlace de la Solicitud:** `http://localhost:3000/profile`
   - **Método:** GET
   - **Cuerpo de la Solicitud:** No se requiere, pero asegúrate de incluir la cookie de sesión válida.

4. **Intento de Acceso al Perfil sin Autenticación:**
   - **Enlace de la Solicitud:** `http://localhost:3000/profile`
   - **Método:** GET
   - **Cuerpo de la Solicitud:** No se requiere.

### Pruebas para el endpoint de Formulario (/form):

5. **Envío de Formulario Correcto:**
   - **Enlace de la Solicitud:** `http://localhost:3000/form`
   - **Método:** POST
   - **Cuerpo de la Solicitud:**
     ```json
     {
       "text": "Este es un texto de prueba para el formulario."
     }
     ```

6. **Intento de Envío de Formulario sin Autenticación:**
   - **Enlace de la Solicitud:** `http://localhost:3000/form`
   - **Método:** POST
   - **Cuerpo de la Solicitud:** No se requiere, pero asegúrate de no incluir la cookie de sesión.

### Pruebas para el endpoint de Contactos (/contacts):

7. **Acceso a la Lista de Contactos:**
   - **Enlace de la Solicitud:** `http://localhost:3000/contacts`
   - **Método:** GET
   - **Cuerpo de la Solicitud:** No se requiere, pero asegúrate de incluir la cookie de sesión válida.

8. **Intento de Acceso a la Lista de Contactos sin Autenticación:**
   - **Enlace de la Solicitud:** `http://localhost:3000/contacts`
   - **Método:** GET
   - **Cuerpo de la Solicitud:** No se requiere.
