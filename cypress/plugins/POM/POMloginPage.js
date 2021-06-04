
const data = require('../../fixtures/data.json')
class LoginPage {
    get EmailInput () {
        return cy.get ('input[id="email"]')
    }

    get PasswordInput () {
        return cy.get ('input[id="userPassword"]')
    }

    get LoginBtn () {
        return cy.get ('button[type="submit"]')
    }

    dataUser () {
        this.EmailInput.type(data.user.email)
        this.PasswordInput.type(data.user.password)
        this.LoginBtn.click({force:true})
    }
}

export const loginPage = new LoginPage()