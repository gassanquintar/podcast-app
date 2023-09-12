# Itunes Podcasts App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: The project includes a file .env.example that contains the environment variables, before running the project rename the file to .env

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Tech Stack

- React v18
- Typescript v4.9
- React Testing Library
- Redux v8.1
- Redux Tool Kit Query v1.9
- Material UI v5
- Tailwindcss v3.3
- Git flow

## Short description

This project uses MUI to implement the basic Look&Feel of the application. The main entry point if it starts with the Home page, which is responsible for making the first call to the API through RTK Query AND which stores the result of the call in a Reducer, when we navigate to the Home page for the second time this call no longer It is done since it uses the data stored in the Reducer. This same operation happens when we click on a specific podcast, we only call the API the first time.

Behind the scenes, RTK implements a 1-day cache.

The components use an optimization strategy for memoization that is cached, and saves the result in memory and returns the cached result for the same input to avoid performance problems due to unnecessary rendering when a state changes. As well as displaying a text or loading indicator as a fallback while React waits to render the deferred component in the UI. For example:

- React.memo
- React.lazy,
- React.Suspense
- useSelector(Redux)

## Patterns and principles that are tried to be implemented in this application.

- Each component has its own responsibility (Single responsibility principle)
- Components can be extended for new functionality but are closed for modifications (Open-Closed Principle).
- Interfaces(TS) are implemented that focus and adapt to the specific requirements of the app (Principle of interface segregation).
- High-level components are implemented to avoid dependency on low-level components (DIP).
- The higher order component (HOC) accepts a component as a child and returns a new component with improved capabilities.
- Implement DRY, to avoid repeating components and reuse them as much as possible.
- Hooks pattern allows us to reuse stateful behavior across multiple components (custom hooks)

## Architecture

Although the directory structure is not divided into application, infrastructure and presentation(clean architecture), responsibilities are well separated.

### Presentation: The following directories belong to the presentation layer

- layouts
- pages
- components

### Infrastructure: The following directories belong to the Infrastructure layer

- services
- hooks

### Application: the following directories belong to the Infrastructure layer

- theme
- router
- store
- reducers
- types
