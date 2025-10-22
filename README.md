# 1. Imaginary Game Store API

This is a basic API project that uses TypeScript, Express & MongoDB to handle requests issued by a [Imaginary Game Store Frontend](https://github.com/himahashi/imaginary-game-store-react-typescript).

# 2. Table of Contents
1. [Imaginary Game Store API](#1-imaginary-game-store-api)
2. [Table of Contents](#2-table-of-contents)
3. [Project Creation](#3-project-creation)
4. [Packages Required](#4-packages-required)
   - [Production Packages](#production-packages)
   - [Development Packages](#development-packages)
5. [Creation of tsconfig.json File](#5-creation-of-tsconfigjson-file)
6. [Configure tsconfig.json](#6-configure-tsconfigjson)
7. [Defining the package.json scripts](#7-defining-the-packagejson-scripts)
8. [Folder Structure](#8-folder-structure)
9. [Software Enviroment Variables](#9-software-enviroment-variables)
10. [Console commands](#10-console-commands)

# 3. Project Creation
Starting off by using the terminal and creating a parent directory for the project.\
Then inside of said directory, run the command `npm init` to initialize the project's creation.

# 4. Packages Required

Inside your IDE of choice, in order to install the required packages the following commands must be executed:

## Production Packages

```
npm i cors
npm i morgan
npm i express
npm i mongoose
```

## Development Packages

```
npm i dotenv --save-dev
npm i nodemon --save-dev
npm i @types/cors --save-dev
npm i @types/morgan --save-dev
npm i @types/express --save-dev
```

# 5. Creation of tsconfig.json File

In your IDE, run the following command `tsc --init` to initialize the _**tsconfig.json**_ file 

# 6. Configure tsconfig.json

Code to modify in the _**tsconfig.json**_ file
```
"module": "commonjs",
"resolveJsonModule": true,
"outDir": "./build",
```

# 7. Defining the package.json scripts

Code to be added in the _**package.json**_ file
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -w",
    "dev": "nodemon build/index.js"
  },
```

# 8. Folder Structure

In your project, create the following folder structure:
- Source Folder: ``md src``
- App Folder: ``md src/app`` and Sub-folders:
```
md src/app/model
md src/app/schemas
md src/app/game
md src/app/game/controller
md src/app/game/dao
md src/app/game/route
```
- Config Folder:
```
md src/config
```
- Middleware Folder:
```
md src/middleware
```
- Doc Folder:
```
md src/doc
```
- Config Sub-folders:
```
md src/config/api
md src/config/domains
md src/config/utilities
md src/config/connection
```

# 9. Software Enviroment Variables

Code to save in a .env file:
```
PORT=3500
URL_MONGO="mongodb://localhost:27017/imaginary-game-store-db"
```

# 10. Console Commands

In separate terminals you should run the following commands:\
- Start Build: ``npm run build``
- Start Development: ``npm run dev``
