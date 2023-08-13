const {login}   =  require("../pageMethods/loginPage")
const {product} = require("../pageMethods/selectProduct")
const {details} = require("../pageMethods/details")
const {payment} = require("../pageMethods/payment")
const base = require("@playwright/test")

exports.test = base.test.extend({
    loginPage: async ({page}, use)=> {
        const loginPage = new login(page)
        await use(loginPage)

    },
    selectProduct: async ({page}, use)=> {
        const selectProduct = new product(page)
        await use(selectProduct)
    },
    personDetails: async ({page}, use)=> {
        const personDetails = new details(page)
        await use (personDetails)
    },
    paymentDetails: async ({page}, use)=> {
        const paymentDetails = new payment(page)
        await use (paymentDetails)
    }
})