# Controlled Styled Editor


> Edit your React components based on Theme UI constrained design principles. 

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

[Theme UI ](https://theme-ui.com/)  allows us to design and write coherent and consistent UIs. It's a reliable approach for consolidating branding compliance across web applications. 

The Controlled Styled Editor is a (very early stage) proof of concept to empower designers to create interactive layouts based on the Theme UIs design system principles applied inside your React components.

### How it works
It uses an extended Theme UI pragma together with React Context API to handle element selection and Theme UI based style injection. Only the defined CSS rule properties from the components are exposed to the editor. 

At its very core, it uses the Theme UI / System UI specification for editing styles through a theme properties style editor. It uses (Theme Query)[https://github.com/woodlike/wdlk/tree/master/packages/theme-query] under the hood which is a very small library I wrote to easily query theme properties.

On the other hand, visual accessibility compliance checks based on the (WCAG)[https://www.w3.org/WAI/standards-guidelines/wcag/] and theme property control live at the heart of the product vision.
Currently, we only support color contrast accessibility checks. By picking a component color and background color you will know if a component has A, AA or AAA compliance (color contrast ratio). But this is only the beginning of making accessibility design checks more visual.

### Future Features
We still need to support most of the CSS properties to seamlessly work with Theme UIs `sx` prop.

It is necessary to get closer to the tools being used by designers. I would like to access  Framer X / Figma  APIs to dynamically create Theme UI themes.

### Refactoring / Changes
Like I mentioned before this is a very early stage proof of concept. UI/UX
refactoring is absolutely necessary. Especially the  `Mini Editor`  behavior of selected fields needs to be handled when selecting new components.


### Challenges
