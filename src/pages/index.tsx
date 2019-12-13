/** @jsx jsx */
import { jsx } from '..';
import { StyleEditorProvider } from '../context';
import { Headline, MiniEditor } from '../components';

const IndexPage = () => {
  return (
    <StyleEditorProvider>
      <Headline id="main-headline">The spectacle before us was indeed sublime.</Headline>
      <h5 id="h5">Hello CodeSandbox</h5>
      <h2 id="h2">Start editing to see some magic happen!</h2>
      <MiniEditor />
    </StyleEditorProvider>
  );
};

export default IndexPage;
