import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnails from './thumbnails';



storiesOf('thumbnails', module) 
.add('thumbnail', () => <Thumbnails/>)
.add('thumbnail2', () => <Thumbnails fill/>)