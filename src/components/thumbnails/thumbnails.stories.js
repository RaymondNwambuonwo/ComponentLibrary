import React from 'react';
import { storiesOf } from '@storybook/react';
import thumbnails from './thumbnails';
import macbook from './macbook.png';


storiesOf('thumbnails', module) 
.add('Email Small', () => <Forms placeholder="Email"