export class HomePageIN {
    private static contactButton = '[href="/contacto"]'
    private static cookiesConfButton = '#rcc-confirm-button'
    

    static visit() {
      cy.visit('');
    }

    static goToContactPage() {
      cy.get(this.cookiesConfButton).click()
      cy.get(this.contactButton).click()
    }
    
}