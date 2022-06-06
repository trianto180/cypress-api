describe('Auth', ()=>{
    it('basic Auth', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('h3').should('include.text', 'Basic Auth')
    });

    it.only('login using headers', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('h3').should('include.text', 'Basic Auth')
    });
});