import * as React from 'react';
import { Global } from '@emotion/core';

import {SEO} from '..';

const globalStyles = {
  body: {
    margin: 0
  }
}

export const Root: React.FC = (props): JSX.Element => (
  <>
    <SEO />
    <Global styles={globalStyles} />
    {props.children}
  </>
);

Root.displayName = 'Root';


