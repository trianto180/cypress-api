describe('Create new user', ()=>{
    it('create new user', () => {
        var user = {
            "name": "Trianto Angga",
            "job" : "senior quality assurance"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response)=>{
            expect(response.status).eq(201)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    });
});