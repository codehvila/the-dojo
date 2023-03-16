# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## **Command Line Setup**

## **Install Firebase**
### `npm install firebase` <kbd>Enter</kbd>

## **Instal firebase-tools**
`> npm install -g firebase-tools` <kbd>ENTER</kbd>

### **Login to firebase**

### Place you into root working directory

`> firebase login` <kbd>ENTER</kbd>


### **Configure firebase**
`> firebase init` <kbd>ENTER</kbd>

### **Choose firebase features**
Choose:
- `(*) Firestore: Configure security rules and indexes files for Firestore`, <kbd>SPACE BAR</kbd>
- `(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`, <kbd>SPACE BAR</kbd>
- `(*) Storage: Configure a security rules file for Cloud Storage` <kbd>SPACE BAR</kbd>

<kbd>ENTER</kbd>

### **Associate project directory with a Firebase project**
`Use and existing project`

`Select a default Firebase project for this directory: thedojosite-*****` <kbd>ENTER</kbd>

### **Firestore Rules Setup**
`Choose file name to use: firestore.rules` <kbd>ENTER</kbd>

### **Firestore Indexes Setup**
`Choose file name to use: firestore.indexes.json` <kbd>ENTER</kbd>

### **Firestore Setup Hosting**
`Choose What do you want to use as your public directory: build` <kbd>ENTER</kbd>

`Configure single-page app (rewrite all urls to /index.html): Yes` <kbd>ENTER</kbd>

`Setup  automatic builds and deploys with GitHub: No` <kbd>ENTER</kbd>

### **Firestore Storage Setup**
If you get an error, go to Firebase Console and setup "Default GCP resource location" on project general settings.
`What file should be used for Storage Rules: storage.rules` <kbd>ENTER</kbd>

### End

---
