//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Admin {
    buscarAdmin() {
        cy.get(el.menuAdmin).click()
        cy.get(el.encontrarUsuario).type("Anthony.Nolan")
        cy.get(el.botaoProcurar).click({ force: true })
        
    }
}

   
export default new Admin()