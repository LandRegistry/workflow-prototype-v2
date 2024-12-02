//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()




router.post('/pg-1-01', function (req, res) {

    const userInput = req.session.data['my_progress_later']; 
    //const userInput2 = req.session.data['Waiting_for_lawyer']; 

    /*if (userInput2 == 'Waiting for lawyer'){

        res.redirect("pg-1-01")  

    } else */if (userInput == 'Progress later') {//selected Extension of time       

        res.redirect("pg-1-02_why")  
        
    } 
})

router.post('/pg-1-02_why', function (req, res) {

    const userInput = req.session.data['reason-why'];

    if (userInput == null) {//empty

        res.redirect("pg-1-02_why-error")

    } else if (userInput != null) {      

        res.redirect("pg-1-01")  
        
    } //else {

        //res.redirect("end")   

    //}
})




router.post('/pg-2-01', function (req, res) {

    const userInput = req.session.data['my_progress_later'];
    const userInputNA = req.session.data['next_action_awaiting']

    
        
    if (userInputNA == 'Change Progress later reason') {

        res.redirect("pg-2-02_why") 

    } else if (userInput == 'Progress later') {//selected Extension of time       

        res.redirect("pg-2-02_why")  
    }
})

router.post('/pg-2-02_why', function (req, res) {

    const userInput = req.session.data['reason-why'];

    if (userInput == null) {//empty

        res.redirect("pg-2-02_why-error")

    } else if (userInput != null) {      

        res.redirect("pg-2-01")  
        
    } //else {

        //res.redirect("end")   

    //}
})

/*router.post('/pg-2-02_referral', function (req, res) {

    const userInput = req.session.data['reason-why'];

    if (userInput == null) {//empty

        res.redirect("pg-2-02_referral-error")

    } else if (userInput != null) {      

        res.redirect("pg-2-01")  
        
    } //else {

        //res.redirect("end")   

    //}
})*/




//flow A one starts ...
router.post('/pg-a-01', function (req, res) {

    const userInput = req.session.data['my_progress_later'];

    if (userInput == 'Progress later') {//selected Extension of time       

        res.redirect("pg-a-02_why")  
        
    } 
})

router.post('/pg-a-02_why', function (req, res) {

    const userInput = req.session.data['reason-why'];

    if (userInput == null) {//empty

        res.redirect("pg-a-02_why-error")

    } else if (userInput != null) {      

        res.redirect("pg-a-01")  
        
    } //else {

        //res.redirect("end")   

    //}
})


//flow B two starts ...
router.post('/pg-b-01', function (req, res) {

    const userInput = req.session.data['my_progress_later'];
    const userInput2 = req.session.data['change_the_reason'];
    const userInput3 = req.session.data['update_next_action'];

    if (userInput2 == 'Change the reason') {//the change reason button
        
        req.session.data['forPrototype'] = null;
        req.session.data['update_next_action'] = null;
        req.session.data['change_the_reason'] = null;
        res.redirect("pg-b-02_pending") 

    } else if (userInput3 == 'Update next action') {//update next action button
        
        req.session.data['forPrototype'] = null;
        req.session.data['update_next_action'] = null;
        req.session.data['change_the_reason'] = null;
        res.redirect("pg-b-02_referral")         

    } else if (userInput == 'Progress later') {

        res.redirect("pg-b-02_why")  
        
    } 
})

router.post('/pg-b-02_why', function (req, res) {

    //req.session.data['my_progress_later'] = null;
    req.session.data['forPrototype'] = null;
    const userInput = req.session.data['reason-why'];

    if (userInput == null) {//empty

        res.redirect("pg-b-02_why-error")

    } else if (userInput != null) {      

        res.redirect("pg-b-01")  
        
    } //else {

        //res.redirect("end")   

    //}
})

router.post('/pg-b-02_pending', function (req, res) {
    
    //req.session.data['update_next_action'] = '';    
    const userInput = req.session.data['pending-why'];

    if (userInput == null) {//empty

        res.redirect("pg-b-02_pending-error")

    } else if (userInput != null) {      

        res.redirect("pg-b-01")  
        
    }
})

router.post('/pg-b-02_referral', function (req, res) {

    //req.session.data['change_the_reason'] = '';
    const userInput = req.session.data['referred-why'];

    if (userInput == null) {//empty

        res.redirect("pg-b-02_referral-error")

    } else if (userInput != null) {      

        res.redirect("pg-b-01")  
        
    }
})

//flow C three starts ...  THE FLOW (other pages) ARE THE SAME AS B/two - but the other form pages will return to B/two. 
router.post('/pg-c-01', function (req, res) {

    const userInput = req.session.data['my_progress_later'];
    const userInput2 = req.session.data['change_the_reason'];
    const userInput3 = req.session.data['update_next_action'];

    if (userInput2 == 'Change the reason') {//the change reason button
        
        req.session.data['forPrototype'] = null;
        req.session.data['update_next_action'] = null;
        req.session.data['change_the_reason'] = null;
        res.redirect("pg-b-02_pending") 

    } else if (userInput3 == 'Update next action') {//update next action button
        
        req.session.data['forPrototype'] = null;
        req.session.data['update_next_action'] = null;
        req.session.data['change_the_reason'] = null;
        res.redirect("pg-b-02_referral")         

    } else if (userInput == 'Progress later') {

        res.redirect("pg-b-02_why")  
        
    } 
})





module.exports = router