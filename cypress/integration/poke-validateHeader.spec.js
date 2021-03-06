/// <reference types="cypress" />

describe('validate header', ()=>{
    it('Validate header', () => {
        var ability = {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }

        cy.request('https://pokeapi.co/api/v2/pokemon/ditto', ability).as('pokeapi').then((response)=> {
            expect(response.body.name).to.eq(ability.name)
        })
        cy.get('@pokeapi').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    });


    /*Validate Status code*/
    it('Validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Validate status code with params', () => {
        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users?page=2'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    /*Validate content Body*/
    it('Validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });

    it('Validate  negativ response', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/negativresponse',
            failOnStatusCode: false
        }).as('negativ')
        cy.get('@negativ').its('status').should('equal', 404)
    });
});