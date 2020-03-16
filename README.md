This is a sample project (POC) to use web workers in a React project to offload blocking tasks which hinder rendering and result in jittery UX for the users.

To show the difference between a blocking app and one which uses web workers we have created 2 routes:
- `/no-worker` -  which as the name suggests does not use a web worker. As soon as the value in text input changes we can see the UI getting stuck and not updating/responding until after the calculation ends.
- `/worker` - this route offloads the heavy work on to a web worker and as a result we can see the UI remains responsive even when the calculation is going on.

### Available Scripts

#### `yarn start`

Runs the app in the development mode with hot reload enabled and linting errors visible in the console.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
Unit tests TBA.

#### `yarn build`

Builds the app for production to the `build` folder. The build is minified and the filenames include the hashes.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

<hr>

Heavily inspired from [This Blog](https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/)

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
