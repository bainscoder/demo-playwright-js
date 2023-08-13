const {expect} = require( "@playwright/test")
import * as loginData from "../testData/login.json"

exports.login = class login {
    constructor(page) {
        this.page = page
        this.username = page.locator("#username")
        this.password = page.locator("#password")
        this.loginBtn = page.locator("#login")
        this.cancel = page.locator("#cancel")
        this.errorMsg = page.locator("#error")
    }

    /**
     * Login with Invalid Credential
     */

    async landingToLoginPage() {
        await this.page.goto("http://127.0.0.1:8000/login.html")
    }
    async loginWithInvalidCredential() {
        await this.username.type(loginData.username)
        await expect(this.username).toHaveValue(loginData.username)
        await this.password.type("Test")
        await expect(this.password).toHaveValue("Test")
        await this.loginBtn.click()
        await expect(this.errorMsg).toContainText(loginData.validationMessage)
        await expect(this.page).not.toHaveURL(loginData.url+"index.html")

    }

    /**
     * Verify functionality of the cancel button
     */
    async verifyCancelButton() {
        await this.username.type(loginData.username)
        await expect(this.username).toHaveValue(loginData.username)
        await this.password.type(loginData.password)
        await expect(this.password).toHaveValue(loginData.password)
        await this.cancel.click()
        await expect(this.username).not.toHaveValue(loginData.username)
        await expect(this.password).not.toHaveValue(loginData.password)
    }

    /**
     * Login with Valid Credential
     */
    async loginWitValidCredential() {
        await this.username.type(loginData.username)
        await expect(this.username).toHaveValue(loginData.username)
        await this.password.type(loginData.password)
        await expect(this.password).toHaveValue(loginData.password)
        await this.loginBtn.click()
        await expect(this.page).toHaveURL(loginData.url+"index.html")

    }
}