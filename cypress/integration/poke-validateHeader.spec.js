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
});