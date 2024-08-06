//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/q01', function (req, res) {
    if (req.session.data['firstName'] != '') {
        res.redirect("q02")
    } 
})// {{data['firstName']}}

router.post('/q02', function (req, res) {
    if (req.session.data['whichTeam'] != null) {
        res.redirect("q03")
    } 
})

router.post('/q03', function (req, res) {
    if (req.session.data['soapColour'] != null) {
        res.redirect("q04")
    } 
})

router.post('/q04', function (req, res) {
    if (req.session.data['penguinType'] != null) {
        res.redirect("q05")
    } 
})

router.post('/q05', function (req, res) {

        const a1 = req.session.data['classicPosterA1']; 
        const a2 = req.session.data['classicPosterA2']; 
        const a3 = req.session.data['classicPosterA3']; 
        const a4 = req.session.data['classicPosterA4']; 
        const a5 = req.session.data['classicPosterA5']; 
        const a6 = req.session.data['classicPosterA6']; 
        const a7 = req.session.data['classicPosterA7']; 
        const a8 = req.session.data['classicPosterA8']; 
        const myPosterArray = [a1, a2, a3, a4, a5, a6, a7, a8];

        let myPosterCounter = 0;        

    if (myPosterArray.every(value => value != null)) {

        myPosterArray.forEach(value => {
            if (value === 'y') {
                myPosterCounter++;
            }
        });

        req.session.data['classicPosterA1'] = myPosterCounter;

        res.redirect("q06")
    } 
})

router.post('/q06', function (req, res) {
    if (req.session.data['framingEffect'] != null) {
        res.redirect("q07")
    } 
})

router.post('/q07', function (req, res) {
    if (req.session.data['implicitBias'] != null) {
        res.redirect("q08")
    } 
})

router.post('/q08', function (req, res) {
    if (req.session.data['selfServingBias'] != null) {
        res.redirect("q09")
    } 
})

router.post('/q09', function (req, res) {

    const p1 = req.session.data['classicPoster2']; 
    const p2 = req.session.data['classicPoster22']; 
    const p3 = req.session.data['classicPoster23']; 
    const p4 = req.session.data['classicPoster24']; 
    const myPosterArray = [p1, p2, p3, p4];

    let myPosterCounter = 0;        

    if (myPosterArray.every(value => value != null)) {

        myPosterArray.forEach(value => {
            if (value === 'y') {
                myPosterCounter++;
            }
        });

        req.session.data['classicPoster2'] = myPosterCounter;

        res.redirect("q10")
    }     
 
})

router.post('/q10', function (req, res) {
    if (req.session.data['flowerType'] != null) {
        res.redirect("q10b-pause")
    } 
})

router.post('/q10b-pause', function (req, res) {
        res.redirect("q11")
})

router.post('/q11', function (req, res) {
    if (req.session.data['questionType'] != null) {
        res.redirect("q12")
    } 
})

router.post('/q12', function (req, res) {
    if (req.session.data['whichQuestion'] != null) {
        res.redirect("q13")
    } 
})

router.post('/q13', function (req, res) {
    if (req.session.data['bestPerson'] != null) {
        res.redirect("q14")
    } 
})

router.post('/q14', function (req, res) {
    if (req.session.data['soapDish'] != null) {
        res.redirect("q15")
    } 
})

router.post('/q15', function (req, res) {
    if (req.session.data['submitQuestion'] != null) {
        res.redirect("q16")
    } 
})

router.post('/q16', function (req, res) {//important not to check, null val allowed

    if (req.session.data['illustionChoice'] == null) {
        req.session.data['illustionChoice'] = 'n';
    }   

    res.redirect("q17")
})

router.post('/q17', function (req, res) {
    if (req.session.data['favouriteQuestion'] != null) {
        res.redirect("q18")
    } 
})

router.post('/q18', function (req, res) {
    if (req.session.data['lastQuestion'] != null) {
        res.redirect("results")
    } 
})






module.exports = router