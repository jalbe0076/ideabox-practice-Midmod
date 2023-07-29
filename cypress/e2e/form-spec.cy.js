describe('have a form that submits new ideas', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/ideas', {
      statusCode: 200,
      fixture: 'items.json'
    }).as('items')
    cy.visit('http://localhost:3000/')
  })

  it('Should have a form', () => {
    cy.wait('@items').then(() => {
      cy.get('.idea-container').find('.card').should('have.length', 3)
        .get('[name="title"]').type('Title')
        .get('form > [name="description"]').type('My cool description goes here')
        .get('button').click()
        .get('.idea-container').find('.card').should('have.length', 4)
        .get('.card').last().contains('h2', 'Title')
        .get('.card').last().contains('p', 'My cool description goes here')
    })
  })
})