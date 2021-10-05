/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // ⚠️ add ID of your board

});

// ⚠️ before running these tests, please create e.g. 4 cards

// task #1: check all card names using .then() command
it('check card name', () => {

})

// task #2: checke some of the cards and using .then() command and expect() check their state
it('checks card state (checked vs. unchecked)', () => {

});

// task #3: create couple of lists and ccheck their number using .then() function
it('number of lists', () => {

})

// task #4: check visibility of lists that you have created. use .then() function
it('list visibility', () => {
  
})

// task #5: check names of all lists. tery to use forEach function for this
it('checks list names', () => {

})
