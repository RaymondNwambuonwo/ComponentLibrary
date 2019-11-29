import React from 'react'
import { storiesOf } from '@storybook/react';
import Thumbnails from './Thumbnails';



storiesOf('thumbnails', module) 
.add('thumbnail', () => <Thumbnails/>)
.add('thumbnail2', () => <Thumbnails fill/>)
.add('Horizontal Thumbnail', () => <Thumbnails horizontal/>)
.add('Horizontal Beats Thumbnail', () => <Thumbnails beatss/>)
.add('Horizontal Thumbnail Inline', () => <Thumbnails inline/>)