import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module) //where we are naming our group of stories
    .add('Primary', () => <Button label="Primary" type="primary"/>)
    .add('Danger', () => <Button label="Danger" type="danger" />)
    .add('Warning', () => <Button label="Warning" type="warning" />)
    .add('Default', () => <Button label="Default" type="default" />)
    .add('Success', () => <Button label="Success" type="success" />)
    // .add('Large Primary', () => <Button label="Large" type="primary" large/>)
    // .add('Large Danger', () => <Button label="Large" type="danger" large/>)
    // .add('Outline Warning', () => <Button label="Outline" type="warning"/>)
    
    //first primary is name of story and second primary is text in button