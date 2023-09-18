import { HomePage } from "../node/homePage"
import { MapPage } from "../node/mapPage"

describe('Interaction with the map page', () => {
    it('Accesing the map page & testing presence', () => {
      HomePage.visit();
      HomePage.goToMap();
      MapPage.mapIsShown();
      MapPage.introductionTextIsShown();
      MapPage.infoWidgetIsShown();
    })
})