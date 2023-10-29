import React from 'react';
const login = ()=>{
    return (


import { schooldata } from "../school data";
const inputdata = new schooldata()

describe('login',()=>{
    it('login', () => {
        cy.visit('https://meroschool.unentrance.com/');
        cy.get('.rounded-lg > .outline-none').type(inputdata.youridentity);
        cy.get('.rounded-lg > .flex > .outline-none').type(inputdata.youridentity);
        cy.get('.bg-white > :nth-child(2) > .flex-col > .justify-center').click();
    })
})
)
}