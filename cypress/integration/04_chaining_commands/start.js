/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it.only('milk is in the list', () => {

  cy
    .contains('[data-cy=card]', 'milk')

});

it('milk is in the second list', () => {

});