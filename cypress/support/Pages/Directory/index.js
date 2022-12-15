//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Directory {
    buscarDiretorio() {
        cy.get(el.menuDirectory).click()
        cy.get(el.pesquisarEmpregado).type("Peter")
        cy.wait(3000)
        cy.get(el.selecionarEmpregado).click()
        cy.get(el.botaoProcurar).click({ force: true })
        cy.get(el.resultadoDaBusca).should('be.visible')
    }
}

export default new Directory()