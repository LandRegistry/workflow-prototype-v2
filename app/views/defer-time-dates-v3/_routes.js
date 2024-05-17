//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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

router.post('/two-defer_02', function (req, res) {//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    const userInput2 = req.session.data['days-type']; 
    //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date') { 

        const newDay = req.session.data['new-date-day'];
        const newMonth = req.session.data['new-date-month'];
        const newYear = req.session.data['new-date-year'];
    
        if (newDay == '' || newMonth == '' || newYear == '') {//dates are empty
    
            res.redirect("two-defer_02-error-empty")
    
        } else {
    
            res.redirect("two-defer_03")
    
        }

    } else {

        res.redirect("two-defer_03")

    }

    /*} else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number        

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")//not zero  

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    }*/

})

router.post('/two-defer_02-error', function (req, res) {

    const userInput2 = req.session.data['days-type']; 
    //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date') { 

        const newDay = req.session.data['new-date-day'];
        const newMonth = req.session.data['new-date-month'];
        const newYear = req.session.data['new-date-year'];
    
        if (newDay == '' || newMonth == '' || newYear == '') {//dates are empty
    
            res.redirect("two-defer_02-error-empty")
    
        } else {
    
            res.redirect("two-defer_03")
    
        }

    } else {

        res.redirect("two-defer_03")

    }    

    /*const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number        

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")  

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else {

        res.redirect("two-defer_03")    

    }*/

})

router.post('/two-defer_02-error-empty', function (req, res) {

    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == null) {//radios are unselected

        res.redirect("two-defer_02-error")

    } else if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date') { 

        const newDay = req.session.data['new-date-day'];
        const newMonth = req.session.data['new-date-month'];
        const newYear = req.session.data['new-date-year'];
    
        if (newDay == '' || newMonth == '' || newYear == '') {//dates are empty
    
            res.redirect("two-defer_02-error-empty")
    
        } else {
    
            res.redirect("two-defer_03")
    
        }

    } else {

        res.redirect("two-defer_03")

    }        

    //const userInput = req.session.data['days'];      
    //const userInput2 = req.session.data['days-type']; 

    /*if (userInput2 == null) {//non selected

        res.redirect("two-defer_02-error")

    } else*/ /*if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number       

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else {

        res.redirect("two-defer_03")    

    }*/

})

/*router.post('/two-defer_02-error-over-one', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number        

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid") 

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-minus', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number        

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid") 

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else {

        res.redirect("two-defer_03")    

    }

})

router.post('/two-defer_02-error-size', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number         

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid") 

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 

    } else {

        res.redirect("two-defer_03")    

    }

})

/*router.post('/two-defer_02-error-not-valid', function (req, res) {

    const userInput = req.session.data['days'];      
    const userInput2 = req.session.data['days-type']; 

    if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

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

    if (userInput2 == '20') {

        res.redirect("two-defer_03-20-days")
    
    } else if (userInput2 == 'date' && userInput == '') { 

        res.redirect("two-defer_02-error-empty")//text input is emtpy 

    } else if (userInput2 == 'date' && /^-/.test(userInput) ) {//minus

        res.redirect("two-defer_02-error-minus")    

    } else if ( (userInput2 == 'date' && isNaN(userInput)) || (userInput2 == 'date' && /^\+/.test(userInput)) ) {
        
        res.redirect("two-defer_02-error-characters")//text input must be a number         

    } else if (userInput2 == 'date' && userInput < 1) {//is zero

        res.redirect("two-defer_02-error-over-one")   

    //} else if (userInput2 == 'date' && /^0/.test(userInput)) {//starts with a zero

        //res.redirect("two-defer_02-error-not-valid")         

    } else if (userInput2 == 'date' && userInput > 100) { 

        res.redirect("two-defer_02-error-size")//text input number must be 100 or less 
    
    } else {

        res.redirect("two-defer_03")    

    }

})*/



module.exports = router