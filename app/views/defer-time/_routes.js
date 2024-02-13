//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/one-defer_01', function (req, res) {

    if (req.session.data['category_code'] == null) {//empty

        res.redirect("one-defer_01-error")

    } else if (req.session.data['category_code'] == 'PL') {//selected Extension of time       

        res.redirect("one-defer_02")  
        
    } else {

        res.redirect("end")  //selected one of the other options  

    }
})

router.post('/one-defer_01-error', function (req, res) {

    if (req.session.data['category_code'] == null) {//empty

        res.redirect("one-defer_01-error")

    } else if (req.session.data['category_code'] == 'PL') {//selected Extension of time          

        res.redirect("one-defer_02")  
        
    } else {

        res.redirect("end")   //selected one of the other options   

    }
})

router.post('/one-defer_02', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 20 || userInput > 100) {//within range?

        res.redirect("one-defer_02-error-size") 

    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")          

    } else {

        res.redirect("one-defer_03")

    }
})

router.post('/one-defer_02-error', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 20 || userInput > 100) {//within range?

        res.redirect("one-defer_02-error-size")      
        
    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")         

    } else {

        res.redirect("one-defer_03")

    }
})

router.post('/one-defer_02-error-size', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 20 || userInput > 100) {//within range?

        res.redirect("one-defer_02-error-size")    
        
    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")            

    } else {

        res.redirect("one-defer_03")

    }
})

router.post('/one-defer_02-error-characters', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 20 || userInput > 100) {//within range?

        res.redirect("one-defer_02-error-size")    
        
    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")           
        
    } else {

        res.redirect("one-defer_03")

    }
})

module.exports = router