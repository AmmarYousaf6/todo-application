describe('Initializing the first test case', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

describe('Checking the status of the application', () => {
    it('Visit the front end app', () => {
        cy.visit('http://localhost:3002');
    });

    it('Check the back end app is running', () => {
        cy.request('http://localhost:3000/todos', { headers: { 'Content-Type': 'application/json' } });
    });
});

describe('Test User input', () => {
    it('Check the input is typing', () => {
        cy.visit('http://localhost:3002');
        const text = 'buy some milk';
        cy.get('[data-testid=input]').type(text).should('have.value', text);
    });
});

describe('Test all the components', () => {
    it('Add a new todo', () => {
        cy.visit('http://localhost:3002');
        const text = 'buy some milk';
        cy.get('[data-testid=input]').type(text);
        cy.get('button').click()
        cy.contains(text)
    });
});

describe('Test the empty input field', () => {
    it('Add a empty todo item', () => {
        cy.visit('http://localhost:3002');
        const text = '    ';
        cy.get('[data-testid=input]').type(text);
        cy.get('button').click()
        cy.contains('cannot add empty item')
    });
});