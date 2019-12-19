/** @jsx jsx */
import { jsx } from '..';
import * as Layout from '../components/layout';
import { StyleEditorProvider } from '../context';
import {
  Button,
  Container,
  Headline,
  MiniEditor,
  Root,
  Text,
  ContainerProps,
} from '../components';

const BuiltInContainer: React.FC<ContainerProps> = props => (
  <Container id={props.id} bg={props.bg} color={props.color}>
    <Headline id={`${props.id}-headline`}>
      The spectacle before us was indeed sublime.
    </Headline>
    <Text id={`${props.id}-text`}>
      The recorded voice scratched in the speaker.
    </Text>
  </Container>
);

const BuiltInContainerII: React.FC<ContainerProps> = props => (
  <Container id={props.id} bg={props.bg} color={props.color}>
    <Headline id={`${props.id}-headline`}>
      My two natures had memory in common.
    </Headline>
    <Button id={`${props.id}-button`}>
      Join the spectacle
    </Button>
  </Container>
);

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <Root>
      <StyleEditorProvider>
        <Layout.Main>
          <Layout.Content>
            <BuiltInContainerII id="built-in-2 "/>
            <BuiltInContainer id="built-in-1" />
            <Headline id="built-in-headline-1">
              A red flare silhouetted the jagged edge of a wing.
            </Headline>
            <Text id="built-in-text-1">
              Silver mist suffused the deck of the ship.
            </Text>
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
