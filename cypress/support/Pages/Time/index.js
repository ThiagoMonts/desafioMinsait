//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Time {
    buscarHorario() {
        cy.get(el.menuTime).click()
        cy.get(el.pesquisarEmpregado).type("Charlie Carter")
        cy.wait(3000)
        cy.get(el.selecionarEmpregado).click()
        cy.get(el.botaoProcurar).click({ force: true })
        cy.get(el.resultadoDaBusca).should('be.visible')
    }
}

   
export default new Time()