describe('the page should have a title, form and idea cards', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/ideas', {
      statusCode: 200,
      fixture: 'items.json'
    }).as('items')
    cy.visit('http://localhost:3000/')
  })

  it('Should have a form', () => {
    cy.wait('@items').then(() => {
      cy.get('h1').contains('IDEA-BOX')
        .get('.form-container').should('be.visible')
        .get('.item-form').children().should('have.length', 3)
        .get('.item-form').first().should('have.attr', 'name')
        .get('.item-form').last().contains('button', 'SUBMIT!')
        .get('.idea-container').find('.card').should('have.length', 3)
        .get('.idea-container').first().contains('h2', 'Bluetooth rotary phone')
        .get('.idea-container').first().contains('p', 'Because it\'s cool as heck and who wants a landline these days')
        .get('.idea-container').last().contains('h2', 'Waterproof books')
        .get('.idea-container').last().contains('p', 'For reading in a pool/ocean/bathtub')
    })
  })

  it('Should not display ideas if there is a 500 level network error', () => {
    cy.intercept('GET', 'http://localhost:3001/ideas', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
     .get('.idea-container').find('.card').should('have.length', 0)
  })

  it('Should not display ideas if there is a 404 level network error', () => {
    cy.intercept('GET', 'http://localhost:3001/ideas', {
      statusCode: 404
    })
    
    cy.visit('http://localhost:3000/')
     .get('.idea-container').find('.card').should('have.length', 0)
  })
})