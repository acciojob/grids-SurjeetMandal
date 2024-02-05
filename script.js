cy.wait(5000); // Wait for 5 seconds
cy.get('.r2c1').click(); // Replace with your actual action


cy.get('.r2c1', { timeout: 10000 }).should('exist');
