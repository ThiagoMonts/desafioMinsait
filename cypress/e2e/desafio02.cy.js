/// <reference types="cypress" />
import Directory from "../support/Pages/Directory"
import Login from "../support/Pages/Login"
import Time from "../support/Pages/Time"
describe('Buscar quadro de horários e diretório', () => {

  beforeEach(()=>{
    cy.visit("/")
    Login.logar("Admin", "admin123")
})

  it('Buscar quadro de horários', () => {
    Time.buscarHorario()
  })

  it('Pesquisar diretório', () => {
    Directory.buscarDiretorio()
  })
})