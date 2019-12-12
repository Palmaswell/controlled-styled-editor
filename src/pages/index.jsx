/** @jsx customPragma */
import { customPragma, ComponentProvider } from '..';

const IndexPage = () => {
  return (
    <ComponentProvider>
      <div>
        <h1 id="h1">Hello CodeSandbox</h1>
        <h2 id="h2">Start editing to see some magic happen!</h2>
      </div>
    </ComponentProvider>
  );
};

export default IndexPage;
