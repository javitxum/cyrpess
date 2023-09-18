export class MapPage {
    private static mapOverlay = '#deckgl-overlay'
    private static introText = '.jss142 > .MuiTypography-root'
    private static infoWidget = '.jss154 > .MuiButtonBase-root > .MuiButton-label'
    private static mapIconButton = '.MuiPaper-root'
    private static zoomInButton = '[aria-label="Increase zoom"] > .MuiIconButton-label > .MuiSvgIcon-root'
    private static zoomNumberInformation = '.jss131 > .MuiGrid-root > .MuiBox-root > .MuiTypography-root'
    private static thematicIndicesButton = '.MuiTypography-h5'
    
    static visit() {
        cy.visit('map/information/h3index');
    }

    static mapIsShown() {
        return cy.get(this.mapOverlay);
    }

    static introductionTextIsShown() {
       return cy.get(this.introText).contains('Introduction');
    }

    static infoWidgetIsShown() {
        return cy.get(this.infoWidget);
    }

    static returnToHomePageWithIcon() {
        cy.get(this.mapIconButton).click();
    }

    static zoomInNumberUpdate() {
        cy.get(this.zoomInButton).click();
        cy.get(this.zoomNumberInformation).contains('8');
    }

    static exploreBrokenThematicIndices() {        
        cy.get(this.thematicIndicesButton).click();
    }

    static testBEError() {
        //Could not find a way to have the buttons not clickable by providing a .json file from fixtures. 
    }

}



