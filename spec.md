# React style prop editor

For this project we want to be able to edit styling of a component at
runtime. In order to do this we'll need to create a custom JSX pragma
which wraps `React.createElement` which can inject added styles and
uses an `onClick` event to select a component.

- A user can click on a component to expose an editor for styles
- The styles are added to the component
- Different styles can be added to different components
- Write a readme that describes:
  - how to run the project
  - how it works
  - any hurdles you might have run into
  - other changes/refactoring/features you would add in the future

## Assumptions

- You can use an HTML `id` attribute to uniquely identify editable components
- You will need to use React Context and an updater to handle selecting elements and applying styles
- You'll need to use React.createElement in your pragma to tie into your editor context using the render prop pattern
    ```js
      return React.createElement(SomeContext.Consumer, {}, val => {
        return React.createElement(pre, {}, JSON.stringify(val, null, 2))
      })
    ```

## Nice to haves

- Tie the style editor into Theme UI's custom JSX pragma
- Expose values like color based on a global theme
