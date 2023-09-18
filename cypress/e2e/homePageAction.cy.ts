import { HomePage } from "../node/homePage"
import { MapPage } from "../node/mapPage"

describe('Interaction of navigation bar in the home page', () => {
    it('Accesing every entry and go to the map checking the zoom action', () => {
      HomePage.visit();
      HomePage.goToClimateResilience();
      HomePage.goToActionPlan();
      HomePage.goToClimateStressor();
      HomePage.goToTheUrgency();
      HomePage.goTohdotMap();
      HomePage.goToMapComponent();
      HomePage.goToMap();
      MapPage.zoomInNumberUpdate();
      MapPage.returnToHomePageWithIcon();
    })
})