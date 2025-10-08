//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//flow starts ...
router.post('/category-of-work-pt1', function (req, res) {

    const userInput = req.session.data['categoryOfWork'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pt1-error")

    } else if (userInput == 'volume') {//selected Volumne      

        res.redirect("category-of-work-volume")  
      
    } else if (userInput == 'executive') {      

        res.redirect("category-of-work-executive")  
            
    } else if (userInput == 'processingVolume') {    

        res.redirect("category-of-work-pro-volume")  
              
    } else if (userInput == 'processingExecutive') {       

        res.redirect("category-of-work-pro-executive")  
              
    } else {

        res.redirect("category-of-work-no-category")  //No Category 

    }
})







module.exports = router