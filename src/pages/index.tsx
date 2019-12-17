/** @jsx jsx */
import { jsx } from '..';
import * as Layout from '../components/layout';
import { StyleEditorProvider } from '../context';
import { Headline, MiniEditor, Root } from '../components';

const IndexPage = () => {
  return (
    <Root>
      <StyleEditorProvider>
        <Layout.Main>
          <Layout.Content>
            <Headline id="headline-1">
              The spectacle before us was indeed sublime.
            </Headline>
            <Headline id="headline-2">
              The spectacle before us was indeed sublime.
            </Headline>
            <h5 id="foo">Hello CodeSandbox</h5>
            <h2 id="cucaricha">Start editing to see some magic happen!</h2>
          </Layout.Content>
          <Layout.SideBar>
            <MiniEditor />
          </Layout.SideBar>
        </Layout.Main>
      </StyleEditorProvider>
    </Root>
  );
};

export default IndexPage;
