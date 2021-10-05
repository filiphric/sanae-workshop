/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_selecting_elements/pages/shapes.html');

})

it('cypress commands', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_selecting_elements/pages/rainbow.html');

  // selecting first element
  cy
    .get('li')

  // selecting element using index
  cy
    .get('li')

  // searching for child element
  cy
    .get('.list')

  // searching for parent element
  cy
    .get('.violet')

});