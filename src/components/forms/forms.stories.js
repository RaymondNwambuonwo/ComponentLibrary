import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms';


storiesOf('Forms', module)
    .add('Email Small', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" little/>)
    .add('Email Medium', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" reg/>)
    .add('Email Large', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" large/>)


    .add('select', () => <Forms type="select" special="select-css" little/>)
    .add('select Reg', () => <Forms type="select" special="select-css" reg/>)
    .add('select Large', () => <Forms type="select" special="select-css" large/>)

    .add('select Fill', () => <Forms type="select" special="select-css" fill little/>)
    .add('select Fill Reg', () => <Forms type="select" special="select-css" fill reg/>)
    .add('select Fill Large', () => <Forms type="select" special="select-css" fill large/>)

    .add('Voucher', () => <Forms placeholder="Voucher" label="Voucher" type="texttwo" little/>)
    .add('Voucher2', () => <Forms placeholder="Voucher" label="Voucher" type="texttwo" large/>)

    .add('Counter', () => <Forms min= {-20} max= {20} step= {1} startingValue= {0} />)
    


    