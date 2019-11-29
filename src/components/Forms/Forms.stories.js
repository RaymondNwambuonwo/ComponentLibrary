import React from 'react'
import { storiesOf } from '@storybook/react';
import Forms from './Forms';


storiesOf('Forms', module)
    .add('Email', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" little/>)
    .add('Email Reg', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" reg/>)
    .add('Email Large', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" large/>)


    .add('select', () => <Forms type="select" special="select-css" little/>)
    .add('select Reg', () => <Forms type="select" special="select-css" reg/>)
    .add('select Large', () => <Forms type="select" special="select-css" large/>)

    .add('select Fill', () => <Forms type="select" special="select-css" fill little/>)
    .add('select Fill Reg', () => <Forms type="select" special="select-css" fill reg/>)
    .add('select Fill Large', () => <Forms type="select" special="select-css" fill large/>)

    .add('Voucher', () => <Forms placeholder="Voucher Code" type="texttwo" buttonText = "Redeem" little/>)
    .add('Voucher Large', () => <Forms placeholder="Voucher Code" type="texttwo" buttonText = "Redeem" large/>)

    .add('black checkbox', () => <Forms blackcheck/>)
    .add('blue checkbox', () => <Forms bluecheck/>)
    .add('text checkbox', () => <Forms textbox blackcheck/>)

    .add('Counter', () => <Forms min= {-20} max= {20} step= {1} startingValue= {0} />)
    


    