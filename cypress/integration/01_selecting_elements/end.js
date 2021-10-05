/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_selecting_elements/pages/shapes.html');

  cy
    .contains('Shapes')

  cy
    .get('h1') // select using tag
    .get('.square') // select using class
    .get('#circle') // select using id
    .get('[data-cy="triangle"]'); // select using attribute

})

it('cypress commands', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_selecting_elements/pages/rainbow.html');

  cy
    .get('li')
    .first()

  cy
    .get('li')
    .eq(2)

  cy
    .get('.list')
    .find('.green')

  cy
    .get('.violet')
    .parent('.list')

});