import { HomePage } from "../node/homePage"
import { MapPage } from "../node/mapPage"

describe('Interaction with calls in API', () => {

    beforeEach(() => {  
       // I have tried 3 different approaches for sending a json file without the index of 'critical facilities', none is working as the buttons still are showing visible. 
       
        // Option 1
        // cy.intercept('GET', '**/data/datasets.json', (err) => {
        //      err.reply({ fixture: 'errorDataset.json' })
        // }).as('error')


        // Option 2
        // cy.intercept('GET', '**/data/datasets.json', (err) => {
        //     err.continue((err) => { 
        //         statuscode: 200
        //         fixture: 'errorDataset'
        //     })
        // })
            
            
        
        // Option 3
        cy.fixture('errorDataset').then(() => {
            cy.intercept('GET', '**/data/datasets.json', (req) => {
                req.continue(() => {
                  statusCode: 200 
                  fixture: 'errorDataset.json'
                });
              }).as('error');
        })
    });    
    
        
    it('testing problems with index dataset', () => {
            HomePage.visit(); 
            HomePage.goToMap();
            MapPage.exploreBrokenThematicIndices();
            //MapPage.testBEError(); => with this function I was planning to 
            
    });


});
    

