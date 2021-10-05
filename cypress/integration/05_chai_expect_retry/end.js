/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/49681072063');

});

it('checking first card name', () => {

  cy
    .get('[data-cy="card-title"]').then( item => {

      expect(item).to.have.text('milk');

    });

});

it('checking all card texts', () => {

  cy
    .get('[data-cy="card-title"]')
    .then( items => {

      expect(items[0]).to.have.text('milk');
      expect(items[1]).to.have.text('chlieb');

    });

});

