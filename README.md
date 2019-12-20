# Controlled Styled Editor

> Edit your React components based on System UI constrained design principles.

[![CircleCI](https://circleci.com/gh/Palmaswell/controlled-styled-editor.svg?style=svg)](https://circleci.com/gh/Palmaswell/controlled-styled-editor)

## Requirements

🚀 Node.js >= 10
🌲 Git
🐈 yarn >= 1.12

## Getting started

```bash
git clone git@github.com:Palmaswell/controlled-styled-editor.git
cd controlled-styled-editor
# Install packages
yarn
# Start development mode
yarn dev
# Run and watch Jest unit tests
yarn test --watch
```

## Motivation

[Theme UI](https://theme-ui.com/)  allows us to design and write coherent and consistent UIs. At its core, it uses the System UI theme specification as a reliable approach for consolidating branding compliance across web applications.

The Controlled Styled Editor is a (very early stage) proof of concept to empower designers to create interactive layouts based on the Theme UI design system principles applied in your React components.

### How it works

Under the hood, it uses a custom JSX Pragma to handle element selection and Theme UI based style injection. It does this by extending the Theme UI JSX Pragma.

At its very core, it uses the Theme UI / System UI specification for editing styles through the theme properties style editor. Your design adjustments will be compliant with your design system.

It also uses [Theme Query](https://github.com/woodlike/wdlk/tree/master/packages/theme-query) under the hood which is a very small library I wrote to easily query theme properties.

On the other hand, we want to make accessibility compliance checks more visual when you edit the style of your components. Based on the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) and theme property control we can currently check the color contrast compliance of your components. See at ease if your changes are AA and AAA compliant.

### Future Features

The idea behind the Controlled Styled Editor is to move the barriers between design and development concerns by automating many of the overlapping processes. For this to become a reality we need to support data input from tools like Framer X and Figma to dynamically generate themes.

Accessibility color contrast check is only the beginning of making accessibility edits more visual. We would like to implement:

- Readability checks
- HTML semantic checks
- A built-in screen reader simulator using the Web Speech API

We would like to abstract System UI themes as a GraphQL queries API instead of binding components with code, we could bind the GraphQL data directly into React components, offering an alternative form of decoupling. Combined with a MetaCSSQuery (`mcq`) custom prop for resolving into a style object.

### Refactoring / Changes

The Controlled Styled Editor is a proof of concept. It's by no means production-ready.   A lot of refactoring and changes needs to done in the following areas:

- Improve the UX of the Mini Editor select by properly handling style properties updates when selecting a new component
- Deploy the application and make it available to the public
- Include missing CSS properties from our `map-controlled-styles`
- Improve the underlying UI/UX
- Write tests for the custom Pragma and the Editor
