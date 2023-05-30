
describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations');
    cy.visit('http://localhost:3000/');
  });

  it('Should display the app title', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations');
  });

  it('Should update the name input value', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="name"]').should('have.value', 'John Doe');
  });
  it('Should add a new reservation to the list', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="date"]').type('2023-06-01');
    cy.get('input[name="time"]').type('18:00');
    cy.get('input[name="numGuests"]').type('4');
    cy.get('.submitButton').click();
});
})