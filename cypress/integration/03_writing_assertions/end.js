/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/66719849538')

})

it('creating a card', () => {

  cy
    .contains('Add another card')
    .click();

  cy
    .get('[data-cy=new-card-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=card]')
    .should('be.visible')

})

it('checking number of cards', () => {

  cy
    .contains('Add another card')
    .click();

  cy
  .get('[data-cy=new-card-input]')
    .type('wash dishes{enter}')

  cy
    .get('[data-cy=card]')
    .should('have.length', 2)

})

it('asserting checked state', () => {

  cy
    .get('[data-cy=card-checkbox]')
    .check()

  cy
    .get('[data-cy=card-date]')
    .should('have.class', 'completed')

  cy
    .get('[data-cy=card-checkbox]')
    .should('be.checked')

})

it('asserting list name', () => {

  cy
    .get('[data-cy=list-name]')
    .should('have.value', 'new list')

})


