# React component library

## General overview

Each package has it's own version. They are self scoped and isolated from other packages.

Lerna [hoist](https://github.com/lerna/lerna/blob/main/doc/hoist.md) option allows that common dependencies will be installed only to the top-level node_modules, and omitted from individual package node_modules.

## Commands

npm run lerna -- create @rcl/button

In one hand, .spec.jsx files run under Cypress. This means we need to use expect from Chai.
In the other hand, .test.jsx files run under Jest.

## Tools

-   [Lerna](https://github.com/lerna/lerna)
-   [Storybook](https://storybook.js.org/docs/react)
-   [Jest](https://jestjs.io/es-ES/docs/tutorial-react)
-   [Babel](https://babeljs.io/)
-   [React Unit Testing Cypress](https://docs.cypress.io/guides/component-testing/introduction.html)

## Accessibility

-   [jest-axe](https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library)
-   [Storybook a11y](https://storybook.js.org/addons/@storybook/addon-a11y)

## Tasks

-   [ ] Deploy a component to GitHub https://github.com/features/packages
-   [ ] Documentation
-   [ ] Establish the peer dependencies: react, react dom
-   [ ] Check that components can be imported into a JS and a TS project
-   [ ] Visual testing
-   [ ] Add browserlist: https://github.com/browserslist/browserslist
-   [ ] Verify that pre-commit hooks work
-   [ ] GitHub action to deploy the library
-   [ ] GitHub action when PR

## Articles

-   https://dev.to/davixyz/writing-your-first-react-ui-library-part-1-lerna-17kc
-   https://github.com/natterstefan/react-component-library-lerna
