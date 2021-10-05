/// <reference types="cypress" />

it('creating a new board', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});

it('starring a board', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="star"]')
    .click({force: true})

});

it('checking a card', () => {

  cy
    .visit('/board/33255693826');

  cy
    .get('[data-cy=card-checkbox]')
    .check();

});