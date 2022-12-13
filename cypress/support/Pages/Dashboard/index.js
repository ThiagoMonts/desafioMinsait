//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Dashboard {
    verificarPerfil() {
        cy.get(el.perfil).should("be.visible")
    }
}
   
export default new Dashboard()