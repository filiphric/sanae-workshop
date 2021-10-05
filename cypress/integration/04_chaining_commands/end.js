/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('milk is in the list', () => {

  cy
    .contains('[data-cy=card]', 'milk')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('milk')

});

it('milk is in the second list', () => {

  cy
    .get('[data-cy=list]')
    .eq(1)
    .find('[data-cy=card]')
    .eq(1)
    .should('contain.text', 'milk')

});