export class HomePage {
    private static exploreMapButton = '.jss16 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label'
    
    private static climateResilienceButton = ':nth-child(1) > .MuiTab-wrapper'
    private static climateResilienceText = 'Climate resilience'
    
    private static actionPlanButton = ':nth-child(2) > .MuiTab-wrapper'
    private static actionPlanGrid = 'The HDOT Action Plan'

    private static climateStressorButton = ':nth-child(3) > .MuiTab-wrapper'
    private static climateStressorText = 'Climate stressor'

    private static theUrgencyButton = '.MuiTabs-flexContainer > :nth-child(4)'
    private static theUrgencyWidget = 'The Urgency'

    private static hdotMapButton = ':nth-child(5) > .MuiTab-wrapper'
    private static hdotMapImage = 'HDOT Asset and Hazard Map'

    private static mapComponentsButton = ':nth-child(6) > .MuiTab-wrapper'
    private static mapComponentWidget = 'Map components'

    private static homeIconButton = '.jss7 > :nth-child(1)'

    static visit() {
      cy.visit('');
    }

    static goToMap() {
      cy.get(this.exploreMapButton).click()
    }

    static userBackInHomePage() {
      cy.contains(this.exploreMapButton)
    }

    static goToClimateResilience() {
      cy.get(this.climateResilienceButton).click()
      cy.contains(this.climateResilienceText)
      cy.get(this.homeIconButton).click()
    }

    static goToActionPlan() {
      cy.get(this.actionPlanButton).click()
      cy.contains(this.actionPlanGrid)
      cy.get(this.homeIconButton).click()
    }
    
    static goToClimateStressor() {
      cy.get(this.climateStressorButton).click()
      cy.contains(this.climateStressorText)
      cy.get(this.homeIconButton).click()
    }

    static goToTheUrgency() {
      cy.get(this.theUrgencyButton).click()
      cy.contains(this.theUrgencyWidget)
      cy.get(this.homeIconButton).click()
    }

    static goTohdotMap() {
      cy.get(this.hdotMapButton).click()
      cy.contains(this.hdotMapImage)
      cy.get(this.homeIconButton).click()
    }

    static goToMapComponent() {
      cy.get(this.mapComponentsButton).click()
      cy.contains(this.mapComponentWidget)
      cy.get(this.homeIconButton).click()
    }
}