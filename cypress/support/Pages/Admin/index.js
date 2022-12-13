//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Admin {
    criarNovoAdmin() {
        cy.get(el.admin).click()
        cy.get(el.add).click()
    }
}

   
export default new Admin()