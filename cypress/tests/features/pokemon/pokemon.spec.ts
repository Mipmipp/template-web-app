// https://docs.cypress.io/guides/overview/why-cypress
describe('Pokemon', () => {
	it('Should render correctly for a given pokemon', () => {
		cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', {
			body: {
				name: 'bulbasaur',
			},
		});

		cy.visit('/pokemon/bulbasaur');

		cy.getBySel('pokemon-name')
			.should('be.visible')
			.and('have.text', 'bulbasaur');
	});
});
