export class ContactPageIN {
    private static enviarFormularioButton = '.jss194 > .MuiButton-root > .MuiButton-label'
    private static requiredText = '.MuiFormHelperText-root'
    

    static visit() {
      cy.visit('/contacto');
    }

    static sendEmptyForm() {
      cy.get(this.enviarFormularioButton).click()
      return cy.get(this.requiredText).should('exist')
    }

}