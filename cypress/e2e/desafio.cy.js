/// <reference types="cypress" />
import Admin from "../support/Pages/Admin"
import Dashboard from "../support/Pages/Dashboard"
import Login from "../support/Pages/Login"
describe('Realizar Login e buscar perfil de Administrador', () => {

  beforeEach(()=>{
    cy.visit("/")
    Login.logar("Admin", "admin123")
})

  it('Realizar login com sucesso', () => {
    Dashboard.verificarPerfil()
  })

  it('Buscar perfil de Administrador', () => {
    Admin.buscarAdmin()
  })
})