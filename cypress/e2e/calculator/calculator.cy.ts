describe('Calculator Component', () => {
    beforeEach(() => {
      cy.visit('/calculator'); // adjust if calculator is at a specific route
    });
  
    it('should render calculator UI', () => {
      cy.contains('0'); // input default
      cy.contains('C');
      cy.contains('=');
    });
  
    it('should perform addition correctly', () => {
      cy.contains('1').click();
      cy.contains('+').click();
      cy.contains('2').click();
      cy.contains('=').click();
      cy.contains('3').should('exist');
    });
  
    it('should handle clear (C)', () => {
      cy.contains('7').click();
      cy.contains('C').click();
      cy.contains('0').should('exist');
    });
  
    it('should handle delete (←)', () => {
      cy.contains('1').click();
      cy.contains('2').click();
      cy.contains('←').click();
      cy.contains('1').should('exist');
    });
  
    it('should handle percentage (%)', () => {
      cy.contains('2').click();
      cy.contains('0').click();
      cy.contains('%').click();
      cy.contains('0.2').should('exist');
    });
  
    it('should handle negate (±)', () => {
      cy.contains('5').click();
      cy.contains('±').click();
      cy.contains('-5').should('exist');
    });
  
    it('should handle complex expression', () => {
      cy.contains('1').click();
      cy.contains('+').click();
      cy.contains('2').click();
      cy.contains('*').click();
      cy.contains('3').click();
      cy.contains('=').click();
      cy.contains('7').should('exist'); // 1 + 2 * 3 = 7
    });
  });
  