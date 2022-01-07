/// <reference types="cypress" />
import '@percy/cypress';
describe('Ejemplo de uso de per', () => {
    it('Desplegando el formulario del paciente', () => {
        cy.visit("http://192.168.1.21:3030/")
        cy.get('[data-cy=new-patient]').click()
        cy.percySnapshot()
    });
});