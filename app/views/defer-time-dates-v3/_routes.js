//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/two-defer_01', function (req, res) {
    const userInput = req.session.data['category_code'];
    req.session.data['days-type'] = null;

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
    req.session.data['days-type'] = null;  

    if (userInput == null) {//empty
        res.redirect("two-defer_01-error")
    } else if (userInput == 'PL') {//selected Extension of time       
        res.redirect("two-defer_02")  
    } else {
        res.redirect("end")  //selected one of the other options  
    }
})

router.post('/two-defer_02', function (req, res) {//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/two-defer_02-error', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/two-defer_02-error-empty', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/one-defer_02-error-empty', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/one-defer_02-error-minus', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/one-defer_02-error-characters', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/one-defer_02-error-over-one', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})

router.post('/one-defer_02-error-size', function (req, res) {
    const userInput2 = req.session.data['days-type']; //const newDateDay = req.session.data['days'];      

    if (userInput2 == null) {//radios are unselected
        res.redirect("two-defer_02-error")
    } else if (userInput2 == '20') {
        res.redirect("two-defer_03-20-days")
    } else if (userInput2 == 'days') {
        const customDay = req.session.data['days'];

        if (customDay == '') {//text input empty
            res.redirect("one-defer_02-error-empty")
        } else if (/^-/.test(customDay)) {//minus
            res.redirect("one-defer_02-error-minus")
        } else if ( (isNaN(customDay)) || (/^\+/.test(customDay)) ) {//must be a number
            //production build will parse out any white space
            res.redirect("one-defer_02-error-characters")         
        } else if (customDay < 1) {//is zero
            res.redirect("one-defer_02-error-over-one")
        } else if (customDay > 99) {//no over 99
            res.redirect("one-defer_02-error-size") 
        } else {
            res.redirect("two-defer_03")
        }           
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
})


module.exports = router