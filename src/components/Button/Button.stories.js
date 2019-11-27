import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import cart from './cart2.png';
import heart from './heart.png';


storiesOf('Button', module) //where we are naming our group of stories
    .add('Primary', () => <Button label="Do Something" type="primary"/>)
    .add('Danger', () => <Button label="Do Something" type="danger" />)
    .add('Warning', () => <Button label="Do Something" type="warning" />)
    .add('Default', () => <Button label="Do Something" type="default" />)
    .add('Success', () => <Button label="Do Something" type="success" />)

    .add('Outline Primary Button', () => <Button label="Do Something" type="primary" outline/>)
    .add('Outline Danger Button', () => <Button label="Do Something" type="danger" outline/>)
    .add('Outline Warning Button', () => <Button label="Do Something" type="warning" outline/>)
    .add('Outline Default Button', () => <Button label="Do Something" type="default" outline/>)
    .add('Outline Success Button', () => <Button label="Do Something" type="success" outline/>)

    .add('Primary Blend', () => <Button label="Do Something" type="primary-blend"/>)
    .add('Danger Blend', () => <Button label="Do Something" type="danger-blend"/>)
    .add('Warning Blend', () => <Button label="Do Something" type="warning-blend"/>)
    .add('Default Blend', () => <Button label="Do Something" type="default-blend"/>)
    .add('Success Blend', () => <Button label="Do Something" type="success-blend"/>)


    .add('Large Primary', () => <Button label="Do Something" type="primary" large/>)
    .add('Large Danger', () => <Button label="Do Something" type="danger" large/>)
    .add('Large Warning', () => <Button label="Do Something" type="warning" large/>)
    .add('Large Default', () => <Button label="Do Something" type="default" large/>)
    .add('Large Success', () => <Button label="Do Something" type="success" large/>)

    .add('Large Outline Primary', () => <Button label="Do Something" type="primary" outline large/>)
    .add('Large Outline Danger', () => <Button label="Do Something" type="danger" outline large/>)
    .add('Large Outline Warning', () => <Button label="Do Something" type="warning" outline large/>)
    .add('Large Outline Default', () => <Button label="Do Something" type="default" outline large/>)
    .add('Large Outline Success', () => <Button label="Do Something" type="success" outline large/>)

    .add('Large Primary Blend', () => <Button label="Do Something" type="primary-blend" blend large/>)
    .add('Large Danger Blend', () => <Button label="Do Something" type="danger-blend" blend large/>)
    .add('Large Warning Blend', () => <Button label="Do Something" type="warning-blend" blend large/>)
    .add('Large Default Blend', () => <Button label="Do Something" type="default-blend" blend large/>)
    .add('Large Success Blend', () => <Button label="Do Something" type="success-blend" blend large/>)
    
    .add('Carty Icon Words', () => <Button label="Add to Cart" type="primary-blend" icon={cart}/>)
    .add('Hearty Icon Words', () => <Button label="Add to Favorites" type="primary-blend" icon={heart}/>)
    .add('Cart Icon button', () => <Button type="primary-blend" icon={cart}/>)
    .add('Heart Icon Button', () => <Button type="primary-blend"icon={heart}/>)