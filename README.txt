//-------------------------------------------------------//
        ------------- Start the project -----------
//-------------------------------------------------------//

npm init

//-------------------------------------------------------//
       ------------ Package Installation -----------
//-------------------------------------------------------//

// Production
npm i cors
npm i morgan
npm i express
npm i mongoose

// Development
npm i dotenv --save-dev
npm i nodemon --save-dev
npm i @types/cors --save-dev
npm i @types/morgan --save-dev
npm i @types/express --save-dev

//-------------------------------------------------------//
    ----------------- Create tsconfig.json ---------------
//-------------------------------------------------------//

tsc --init

//-------------------------------------------------------//
    -------------- Configure tsconfig.json ------------
//-------------------------------------------------------//

"module": "commonjs",
"resolveJsonModule": true,
"outDir": "./build",

//-------------------------------------------------------//
    --------- Defining the package.json scripts -------
//-------------------------------------------------------//

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -w",
    "dev": "nodemon build/index.js"
  },

//-------------------------------------------------------//
    ----------------- Folder Structure ----------------
//-------------------------------------------------------//

md src

md src/app
md src/config
md src/middleware
md src/doc

md src/config/api
md src/config/domains
md src/config/utilities
md src/config/connection

md src/app/model
md src/app/schemas
md src/app/game

md src/app/game/controller
md src/app/game/dao
md src/app/game/route


//-------------------------------------------------------//
    ----- Software Enviroment Variables -----
//-------------------------------------------------------//

PORT=3500
URL_MONGO="mongodb://localhost:27017/db_games"

//-------------------------------------------------------//
    ---------------- Console commands ------------------
//-------------------------------------------------------//
//First console
npm run build
//Second console
npm run dev
//-------------------------------------------------------//