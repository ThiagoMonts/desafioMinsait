/// <reference types="cypress" />
import Admin from "../support/Pages/Admin"
import Dashboard from "../support/Pages/Dashboard"
import Login from "../support/Pages/Login"
describe('Realizar Login', () => {

  it('Realizar login com sucesso', () => {
    Login.logar("Admin", "admin123")
    Dashboard.verificarPerfil()
  })

  /*it('Criar novo perfil de Administrador', () => {
    Admin.criarNovoAdmin()
  })*/ 
})