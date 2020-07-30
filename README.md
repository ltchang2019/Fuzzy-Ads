This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up Textile Hub

Follow the instructions [here](https://docs.textile.io/hub/accounts/#account-setup)

## Compiling in Dev Mode
To run `npm run dev`, create a config.js file in the root directory with this structure:<br />

`API_KEY="<your-textile-api-key>";` <br />
`API_SECRET="<your-textile-api-secret>";`<br />
`DB_ID="<your-textile-db-id>";`<br />
`JWT_SECRET="<made-up-jwt-secret>";`<br />
`INFURA_LINK="<your-infura-api-link>";`<br />
`module.exports = { API_KEY, API_SECRET, DB_ID, JWT_SECRET, INFURA_LINK };`

## Available Scripts
In the project directory, you can run:

### `npm run dev`
Runs the app in the development mode. Runs app at localhost:3000 and server at localhost:5000<br />

### `npm start`
Runs client side at localhost:3000.

### `npm run server`
Runs server at localhost:5000.

### Building server
Rebuild typescript server document as runnable javascript file:
`tsc ./src/server/index.ts --esModuleInterop`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
