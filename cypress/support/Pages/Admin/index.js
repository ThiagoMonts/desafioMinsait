//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Admin {
    criarNovoAdmin() {
        cy.get(el.menuAdmin).click()
        cy.get(el.botaoAdicionarAdmin).click()
        
    }
}

   
export default new Admin()