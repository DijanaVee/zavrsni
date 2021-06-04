class Navigation {
    get MyAccounth () {
        return cy.get ('a[href="/login"]')
    }


    get loginBtn (){
        return cy.get ('a[class="btn btn-outline-primary"]')
    }

    get addProfessor (){
        return cy.get (':nth-child(6) > .nav-link')
    }

    clickLoginBtn() {
        this.loginBtn.click()
    }
    clickaddProfessor() {
        this.addProfessor.click()
    }
}

export const navigaton = new Navigation()