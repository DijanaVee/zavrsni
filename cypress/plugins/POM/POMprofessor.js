const data = require('../../fixtures/data.json')

class AddProfessor {
    get NameInput () {
        return cy.get ('input[id="input-default"]')
    }

    get LastNameInput() {
        return cy.get ('input[id="input-default1"]')
    }

    get SelectGradebook () {
        return cy.get ('select[id="__BVID__149"]')
    }

    get SubmitBtn () {
        return cy.get ('.btn-secondary')
    }

    get AddImageBtn () {
        return cy.get ('button[class="btn btn-image btn-primary"]')
    }

    get CancelBtn () {
        return cy.get ('button[class="btn btn-image btn-primary"]')
    }

    get UrlImage  () {
        return cy.get ('#__BVID__45')
    }

    createProfessor() {
        this.NameInput.type(data.addProfesor.firstNameP)
        this.LastNameInput.type(data.addProfesor.lastNameP)
        this.AddImageBtn.click({force:true})
        this.UrlImage.type(data.addProfesor.imageUrl)
        this.SubmitBtn.click({force:true})
    
    } 


}

export const addProfesor = new AddProfessor()