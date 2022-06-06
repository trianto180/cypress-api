describe('Delete User', ()=>{
    it('Delete user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users2').then((response)=>{
            expect(response.status).eq(204)
        })
    });
});