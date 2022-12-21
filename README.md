 # API users_protected_router


En este proyecto creamos rutas protegidas en las que el usuario debe autenticarse por medio de un JsonWebToken y de esta forma poder enviar peticiones de tipo: GET, POST, PATCH Y DELETE (CRUD) a nuestra API. En este caso, solo protegimos las rutas que prestan el servicio de actualizar (UPDATE) los datos de un usuario y eliminar (DELETE) usuario, según su id.

Para esto implementamos librerías como ***dotenv*** para poder generar nuestras variables de entorno, ***bcrypt*** para encriptar las contraseñas de nuestros usuarios, ***jsonwebtoken*** para generar el token de nuestros usuarios, ***passportJWT*** para autenticar las peticiones de usuarios, entre otras.
