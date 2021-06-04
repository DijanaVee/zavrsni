import {navigaton} from'../plugins/POM/POMnavigation.js'
import {loginPage} from'../plugins/POM/POMloginPage.js'
import {addProfesor} from '../plugins/POM/POMprofessor.js'



const data = require ('../fixtures/data.json')

describe ('login spec',()=> {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });

    it ('visit gradebook page', () => {
        cy.visit ('https://gradebook.vivifyideas.com/gradebooks')
    })


   it ('go to Login', () => {
        cy.intercept ("POST","https://gradebook-api.vivifyideas.com/api/login",(req) =>{}).as('goToLogin')
        loginPage.dataUser()
        cy.wait('@goToLogin').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it('add professor', ()=> {
        navigaton.clickaddProfessor()
        addProfesor.createProfessor()
    })

    afterEach(() => {
        cy.saveLocalStorage();
      });

})