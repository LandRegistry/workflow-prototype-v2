//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//there 7 error pages to create

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

        res.redirect("category-of-work-list-pg")  //No Category 

    }
})

router.post('/category-of-work-volume', function (req, res) {

    const userInput = req.session.data['categoryVolume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-volume-error")

    } else {

        res.redirect("category-of-work-list-pg")  //No Category 

    }
})

router.post('/category-of-work-executive', function (req, res) {

    const userInput = req.session.data['categoryExecutive'];
    const userSubInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-executive-error")

    } else {//one parent was selected

        if (userInput == 'registerUpdateComplex' && userSubInput == null) {//empty. ie, parent and no subs selected      
            
            res.redirect("category-of-work-executive-subs-error")

        } else if (userInput == 'registerUpdateComplex' && userSubInput == 'ipsum-b') {//parent and any of the other subs selected
            
            res.redirect("category-of-work-executive-tertiary")//to tertiary form pg           

        } else {
            
            res.redirect("category-of-work-list-pg")//std return to worklist 

        }

    }
})

router.post('/category-of-work-executive-tertiary', function (req, res) {

    const userInput = req.session.data['ipsum-b-sub'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-executive-tertiary-error")

    } else {

        res.redirect("category-of-work-list-pg")  //No Category 

    }
})

router.post('/category-of-work-pro-volume', function (req, res) {

    const userInput = req.session.data['pro-volume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-volume-error")

    } else {

        res.redirect("category-of-work-list-pg")  //No Category 

    }
})

router.post('/category-of-work-pro-executive', function (req, res) {

    const userInput = req.session.data['pro-executive'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-executive-error")

    } else {

        res.redirect("category-of-work-list-pg")  //No Category 

    }
})



module.exports = router