/// <reference types="cypress" />
import Login from "../support/Pages/Login"
describe('Realizar Login', () => {

  it('Realizar login com sucesso', () => {
    Login.acessarURL()
    Login.preencherUsername("Admin")
    Login.preencherPassword("admin123")
    Login.clicarNoBotaoLogin()
    Login.verificarPerfil()
  })
})