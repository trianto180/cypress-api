describe('Update user', ()=>{
    it('update user', () => {
        var user = {
            "name": "Angga Trianto",
            "job": "SQA"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response)=> {
            expect(response.status).eq(200)
            expect(response.body.name).to.equal(user.name)
        })
    });
});