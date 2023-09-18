import { HomePage } from "../node/homePage"
import { MapPage } from "../node/mapPage"



describe('Interaction with calls in API', () => {
   it('testing problems with index dataset', () => {

    const uploadFileRequest = (fileToUpload, uniqueName, errorD) => {
    const data = new FormData();
    
    data.append("hasHeader", "true");
    data.append("name", uniqueName);
    
    cy.intercept({
            method: "GET",
            url: "**/data/datasets.json",
          })
          .as(errorD)
          .window()
          .then((win) => {
            cy.fixture('errorDataset', "binary")
              .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
              .then((blob) => {
                const xhr = new win.XMLHttpRequest();
      
                data.set("errorDataset", blob, fileToUpload);
      
                xhr.open("GET", "**/data/datasets.json");

                xhr.send(data);
              });
            })
        }
        HomePage.visit(); 
        HomePage.goToMap();
        MapPage.exploreBrokenThematicIndices();
        MapPage.testBEError();   
    })    
})
        
    
       
          
      
       
      
      
    
      
    
    
