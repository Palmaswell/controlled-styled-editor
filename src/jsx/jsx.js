import * as React from "react";
import { jsx } from "theme-ui";

/* return React.createElement(ComponentContext.Consumer, {}, val => {

//  return jsx(type, props, ...children)
})*/

/*
  {
   activeElementId: 'h1',
   styles: {
     h1: {
       color: 'red'
     }
   }
 }
*/

export const ComponentContext = React.createContext({});

export const ComponentProvider = ({ children }) => {
  const [currentId, setCurrentId] = React.useState(null);
  return (
    <ComponentContext.Provider value={{ currentId, setCurrentId }}>
      {children}
    </ComponentContext.Provider>
  );
};

export function customPragma(type, props, ...children) {
  return React.createElement(ComponentContext.Consumer, {}, value => {
    console.log(value);
    const onClick = () => {
      console.log(props);
      if (props.id && typeof props.id === "string" && props.id.length > 0) {
        value.setCurrentId(props.id);
      }
    };

    return jsx(type, { ...props, onClick }, ...children);
  });
}

/*
  return React.createElement(ComponentContext.Consumer)
  <ComponentContext.Consumer>{val => (
    {jsx(type, )
  )}
*/
