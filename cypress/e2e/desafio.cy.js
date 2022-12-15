/// <reference types="cypress" />
import Admin from "../support/Pages/Admin"
import Dashboard from "../support/Pages/Dashboard"
import Login from "../support/Pages/Login"
describe('Realizar Login', () => {

  beforeEach(()=>{
    cy.visit("/")
    Login.logar("Admin", "admin123")
})

  it('Realizar login com sucesso', () => {
    Dashboard.verificarPerfil()
  })

  /*it('Criar novo perfil de Administrador', () => {
    Admin.criarNovoAdmin()
  })*/
})