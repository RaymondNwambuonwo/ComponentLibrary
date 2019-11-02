import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms';


storiesOf('Forms', module)
    .add('Email Small', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" small />)
    .add('Email Medium', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" medium/>)
    .add('Email Large', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" large />)


    .add('select', () => <Forms placeholder="select" label="select" type="select" inputType="select" little />)
    .add('select Reg', () => <Forms placeholder="select" label="select" type="select" inputType="select" reg/>)
    .add('select Large', () => <Forms placeholder="select" label="select" type="select" inputType="select" large />)


    .add('Voucher', () => <Forms placeholder="Voucher" label="Voucher" type="texttwo" small />)
    .add('Voucher2', () => <Forms placeholder="Voucher" label="Voucher" type="texttwo" large />)

    // .add('counter', ()=> <Forms )


    