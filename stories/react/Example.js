import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from 'components/_refcomponent';

storiesOf('Text', module)
  .add('Example', () => {
  		return (
  			<Example/>
  		)
  	});