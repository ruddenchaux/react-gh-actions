# React github actions

This repo show an example of github actions for the react app but it can useful also for a pure node js project.

## Actions

There are one workflow with 2 jobs

- cypress: this job run the cypress tests and register the results on the [Cypress Dashboard](https://dashboard.cypress.io/projects/s5vyfx/runs). Learn more on official Cypress Github Actions [documentation](https://github.com/cypress-io/github-action).
- deploy: this job, if cypress job successes, it make a deploy on Netlify https://friendly-edison-34e176.netlify.app. Learn more from [Github Actions used](https://github.com/nwtgck/actions-netlify).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn test`

Build, serve and run cypress tests.

### `yarn serve`

Serve the `build` folder on port 3000.

### `yarn cy:open`

Open the cypress test app.

### `yarn cy:run`

Run the cypress tests (invoked from ci/cd github actions).

### `yarn lint`

Run the eslint linter.

### `yarn lint:fix`

Fix the eslint error.

### `yarn lint:ci`

Run the eslint linter in quiet mode (invoked from ci/cd github actions).

### `yarn format`

Format the src files with prettier.

### `yarn prepare-commit-msg-unix`

Run the commitizen cli for unix os (invoked from hook `prepare-commit-msg`).

### `yarn prepare-commit-msg-win`

Run the commitizen for windows os (invoked from hook `prepare-commit-msg`).

## Commit
The project use git hooks for static code analysis and for standardize the commit message.
The commit standard is https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum.

`git commit`
- run a eslint
- open the interactive commitizen cli for create the commit message