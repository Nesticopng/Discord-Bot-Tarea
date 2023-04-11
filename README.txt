1 - Creamos una aplicacion en https://discord.com/developers/applications/

2 - Vamos a la sección "Bot" activamos todos los switches en "Privileged Gateway intents" y copiamos el token

3 - Vamos a la sección OAuth2/URL Generator 

	3.1 - En el menú "scope" activamos las opciones: bot y applications.commands.

	3.2 - En el menú "bot permissions" activamos la opción: Administrator
	
	3.3 - Con el link de el final de la página añadimos el bot a nuestro server de discord de preferencia

4 - Abrimos en una Visual Studio Code los archivos del repositorio

5 - Instalamos las siguientes dependencias en el terminal

	5.1 - npm init--yes 

	5.2 - npm i discord.js

	5.3 - npm i axios

	5.4 - npm i dotenv

6 - Ingresar el token de su bot de discord anteriormente copiado en el archivo .env

7 - En el package.json reemplazar el texto de la linea 7 a:  "start": "nodemon src/app.js"

8 - En el terminal ingresar: npm run start

Y ya estaria listo su bot
