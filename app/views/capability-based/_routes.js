//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


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

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-pt1-error', function (req, res) {
    
    const userInput = req.session.data['categoryOfWork'];
    //req.session.data['categoryOfWork'] = null;

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

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-volume', function (req, res) {

    const userInput = req.session.data['categoryVolume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-volume-error")

    } else {

        res.redirect("category-changed-confirmation")  

    }
})

router.post('/category-of-work-volume-error', function (req, res) {

    const userInput = req.session.data['categoryVolume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-volume-error")

    } else {

        res.redirect("category-changed-confirmation")  

    }
})

router.post('/category-of-work-executive', function (req, res) {

    const userInput = req.session.data['categoryExecutive'];
    const userSubInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-executive-error")

    } else {//a parent was selected

        if (userInput == 'registerUpdateComplex' && userSubInput == null) {//empty. ie, parent and no subs selected      
            
            res.redirect("category-of-work-executive-subs-error")

        } else if (userInput == 'registerUpdateComplex' && userSubInput == 'ipsum-b') {//parent and the second sub (b) has been selected
            
            res.redirect("category-of-work-executive-tertiary")//to tertiary form pg           

        } else {
            
            res.redirect("category-changed-confirmation")//std return to worklist 

        }

    }
})

router.post('/category-of-work-executive-error', function (req, res) {

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
            
            res.redirect("category-changed-confirmation")//std return to worklist 

        }

    }
})

router.post('/category-of-work-executive-subs-error', function (req, res) {

    const userInput = req.session.data['categoryExecutive'];
    const userSubInput = req.session.data['ipsum'];

    if (userInput == 'registerUpdateComplex' && userSubInput == null) {//subs are showing and are empty

        res.redirect("category-of-work-executive-subs-error")

    } else if (userInput == 'registerUpdateComplex' && userSubInput != null) {//subs are showing and are NOT empty

        res.redirect("category-changed-confirmation") 

    } else {//the user changed the parent selection (without subs)

        res.redirect("category-changed-confirmation") 

    }
})

router.post('/category-of-work-pro-volume', function (req, res) {

    const userInput = req.session.data['pro-volume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-volume-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-pro-volume-error', function (req, res) {

    const userInput = req.session.data['pro-volume'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-volume-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-pro-executive', function (req, res) {

    const userInput = req.session.data['pro-executive'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-executive-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-pro-executive-error', function (req, res) {

    const userInput = req.session.data['pro-executive'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-pro-executive-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})







router.post('/category-of-work-executive-tertiary', function (req, res) {

    const userInput = req.session.data['ipsum-b'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-executive-tertiary-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})

router.post('/category-of-work-executive-tertiary-error', function (req, res) {

    const userInput = req.session.data['ipsum-b'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-executive-tertiary-error")

    } else {

        res.redirect("category-changed-confirmation")  //No Category 

    }
})


// *******************************************************************************************

router.post('/select-a-category-of-work-b', function (req, res) {

    const userInput = req.session.data['category'];

    if (userInput == null) {//empty

        res.redirect("select-a-category-of-work-b-error")

    } else if (userInput == 'category-std') {//userInput == 'category-std'. The standard forms/flow

        res.redirect("category-of-work-by-category")        

    } else {//userInput == 'category-all'

        res.redirect("category-of-work-by-all-categories")  

    }
})
router.post('/select-a-category-of-work-b-error', function (req, res) {

    const userInput = req.session.data['category'];

    if (userInput == null) {//empty

        res.redirect("select-a-category-of-work-b-error")

    } else if (userInput == 'category-std') {//userInput == 'category-std'. The standard forms/flow

        res.redirect("category-of-work-by-category")        

    } else {//userInput == 'category-all'

        res.redirect("category-of-work-by-all-categories")  

    }
})

router.post('/category-of-work-by-category', function (req, res) {

    const userInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-by-category-error")

    } else {//not empty

        res.redirect("category-changed-confirmation")  

    }
})
router.post('/category-of-work-by-category-error', function (req, res) {

    const userInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-by-category-error")

    } else {//not empty

        res.redirect("category-changed-confirmation")  

    }
})

router.post('/category-of-work-by-all-categories', function (req, res) {

    const userInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-by-all-categories-error")

    } else {//userInput == 'category-all'

        res.redirect("category-changed-confirmation")  

    }
})

router.post('/category-of-work-by-all-categories-error', function (req, res) {

    const userInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-by-all-categories-error")

    } else {//userInput == 'category-all'

        res.redirect("category-changed-confirmation")  

    }
})

/* ************************************************************************************************ */

router.post('/select-a-category-of-work-c', function (req, res) {

    const userInput = req.session.data['category'];

    if (userInput == null) {//empty

        res.redirect("select-a-category-of-work-c")//this will be an -error pg

    } else if (userInput == 'category-std') {

        res.redirect("select-a-category-of-work-c")//for now, just redirect back to the same pg     

    } else {//value == 'category-all'

        res.redirect("category-of-work-by-all-categories-c")  

    }
})

router.post('/category-of-work-by-all-categories-c', function (req, res) {

    const userInput = req.session.data['ipsum'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-by-all-categories-c")//this will be an -error pg

    } else {

        res.redirect("category-of-work-how-many-c")  

    }
})

router.post('/category-of-work-how-many-c', function (req, res) {

    const userInput = req.session.data['qty-case'];

    if (userInput == null) {//empty

        res.redirect("category-of-work-how-many-c")//this will be an -error pg

        //this switch branching will need updating to accomidate the 3rd choice with its nested text input field


    } else {

        res.redirect("category-of-work-retrieved-c")  

    }
})

router.post('/category-of-work-retrieved-c', function (req, res) {

    //I added the URL pg of 'category-of-work-create-list-c' to the form action in the 'category-of-work-retrieved-c' pg

})


module.exports = router