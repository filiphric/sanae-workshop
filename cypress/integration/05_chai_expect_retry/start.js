/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/49681072063');

});

it.only('checking first card name', () => {

  cy
    .get('[data-cy="card-title"]')
    .should('have.text', 'bread')

});

it('checking all card texts', () => {

  cy
    .get('[data-cy=card-title]')
    .eq(0)
    .should('have.text', 'milk')

  cy
    .get('[data-cy=card-title]')
    .eq(1)
    .should('have.text', 'bread')

});


