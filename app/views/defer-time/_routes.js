//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//flow one starts ...
router.post('/one-defer_01', function (req, res) {

    const userInput = req.session.data['category_code'];

    if (userInput == null) {//empty

        res.redirect("one-defer_01-error")

    } else if (userInput == 'PL') {//selected Extension of time       

        res.redirect("one-defer_02")  
        
    } else {

        res.redirect("end")  //selected one of the other options  

    }
})

router.post('/one-defer_01-error', function (req, res) {

    const userInput = req.session.data['category_code'];

    if (userInput == null) {//empty

        res.redirect("one-defer_01-error")

    } else if (userInput == 'PL') {//selected Extension of time          

        res.redirect("one-defer_02")  
        
    } else {

        res.redirect("end")   //selected one of the other options   

    }
})

router.post('/one-defer_02', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 1) {//not zero

        res.redirect("one-defer_02-error-size")

    } else if (/^0/.test(userInput)) {//starts with a zero

        res.redirect("one-defer_02-error-not-valid")           

    } else if (userInput > 100) {//no over 100

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

    } else if (userInput < 1) {//not zero

        res.redirect("one-defer_02-error-size")        

    } else if (/^0/.test(userInput)) {//starts with a zero

        res.redirect("one-defer_02-error-not-valid")          

    } else if (userInput > 100) {//no over 100 //userInput < 1 || userInput > 100

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

    } else if (userInput < 1) {//not zero

        res.redirect("one-defer_02-error-size")  

    } else if (/^0/.test(userInput)) {//starts with a zero

        res.redirect("one-defer_02-error-not-valid")         

    } else if (userInput > 100) {//no zero and no over 100

        res.redirect("one-defer_02-error-size")    
        
    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")            

    } else {

        res.redirect("one-defer_03")

    }
})

router.post('/one-defer_02-error-not-valid', function (req, res) {

    const userInput = req.session.data['days'];

    if (userInput == '') {//empty

        res.redirect("one-defer_02-error")

    } else if (userInput < 1) {//not zero

        res.redirect("one-defer_02-error-size")       

    } else if (/^0/.test(userInput)) {//starts with a zero

        res.redirect("one-defer_02-error-not-valid")         

    } else if (userInput > 100) {//no zero and no over 100

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

    } else if (userInput < 1) {//not zero

        res.redirect("one-defer_02-error-size")         

    } else if (/^0/.test(userInput)) {//starts with a zero

        res.redirect("one-defer_02-error-not-valid")         

    } else if (userInput > 100) {//no zero and no over 100

        res.redirect("one-defer_02-error-size")    
        
    } else if (isNaN(userInput)) {//must be a number
        //production build will parse out any white space
        res.redirect("one-defer_02-error-characters")           
        
    } else {

        res.redirect("one-defer_03")

    }
})


//flow two starts ...
router.post('/two-defer_01', function (req, res) {

    const userInput = req.session.data['category_code'];

    if (userInput == null) {//empty

        res.redirect("two-defer_01-error")

    } else if (userInput == 'PL') {//selected Extension of time       

        res.redirect("two-defer_02")  
        
    } else {

        res.redirect("end")  //selected one of the other options  

    }
})

router.post('/two-defer_01-error', function (req, res) {

    const userInput = req.session.data['category_code'];    

    if (userInput == null) {//empty

        res.redirect("two-defer_01-error")

    } else if (userInput == 'PL') {//selected Extension of time       

        res.redirect("two-defer_02")  
        
    } else {

        res.redirect("end")  //selected one of the other options  

    }
})

router.post('/two-defer_02', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == null) {//empty

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")//not zero  

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")  

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-empty', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    /*if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else*/ if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")   

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-size', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    /*if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else*/ if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")   

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid") 

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-not-valid', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    /*if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else*/ if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")   

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid") 

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-characters', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    /*if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else*/ if (userInput2 == '20') {

        res.redirect("two-defer_03")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy 

    } else if (userInput2 == 'date' && userInput < 1) {//not zero

        res.redirect("two-defer_02-error-size")   

    } else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else if (userInput2 == 'date' && isNaN(userInput)) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number
    
    } else {

        res.redirect("two-defer_03")    

    }

})



module.exports = router