import React from 'react';
import { storiesOf } from '@storybook/react';

import Forms from './Forms';


storiesOf('Forms', module)
    .add('Email Small', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" small />)
    .add('Email Medium', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" medium/>)
    .add('Email Large', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" large />)


    